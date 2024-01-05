import {
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileService } from './file.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { unlink } from 'fs';
import { promisify } from 'util';
import { CourseService } from '../course/course.service';
import { ApiResponse } from '@nestjs/swagger';
import { File } from './file.entity';

const unlinkAsync = promisify(unlink);

const storage = diskStorage({
  destination: './apps/api/public/uploads',
  filename: (req, file, cb) => {
    const name = file.originalname.split('.')[0];
    const extension = extname(file.originalname);
    const randomName = Array(32)
      .fill(null)
      .map(() => Math.round(Math.random() * 16).toString(16))
      .join('');
    cb(null, `${name}-${randomName}${extension}`);
  },
});

@Controller('file')
export class FileController {
  constructor(
    private fileService: FileService,
    private courseService: CourseService
  ) {}

  @Get()
  @ApiResponse({ status: 200, type: [File] })
  async findAll() {
    return this.fileService.findAll();
  }

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file', { storage }))
  async upload(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({
            fileType:
              'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          }),
        ],
      })
    )
    file: Express.Multer.File
  ) {
    const data = await this.fileService.create(file);

    return {
      message: 'File uploaded successfully',
      data,
    };
  }

  @Post('/:id/process')
  @HttpCode(200)
  async process(@Param('id') id: string) {
    const file = await this.fileService.findOne(parseInt(id));

    if (!file) {
      throw new NotFoundException(`File #${id} not found`);
    }

    try {
      await this.courseService.createFromFile(file);

      return {
        error: false,
        message: 'File processed successfully',
      };
    } catch (error) {
      console.log(error);
    }
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    const { path } = await this.fileService.findOne(parseInt(id));

    await this.fileService.remove(parseInt(id));
    await unlinkAsync(path);
    return {
      message: 'File deleted successfully',
    };
  }
}
