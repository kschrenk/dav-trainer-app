import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { File } from './file.entity';
import { CourseService } from '../course/course.service';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(File) private readonly fileRepository: Repository<File>,
    private CourseService: CourseService
  ) {}

  async create(file: Express.Multer.File) {
    const createdFile = this.fileRepository.create({ ...file });
    return await this.fileRepository.save(createdFile);
  }

  async findAll() {
    return await this.fileRepository.find();
  }

  async findOne(id: number) {
    return await this.fileRepository.findOneBy({ id });
  }

  async remove(id: number) {
    const file = await this.findOne(id);
    if (!file) {
      throw new NotFoundException(`File #${id} not found`);
    }
    return await this.fileRepository.delete(id);
  }

  async createCourseFromJSON() {}
}
