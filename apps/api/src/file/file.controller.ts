import { Body, Controller, Post } from '@nestjs/common';
import { CreateFileDto } from './dtos/create-file.dto';
import { FileService } from './file.service';

@Controller('file')
export class FileController {
  constructor(private fileService: FileService) {}

  @Post('/upload')
  upload(@Body() body: CreateFileDto) {
    return this.fileService.create(body.name);
  }
}
