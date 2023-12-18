import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { File } from './file.entity';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(File) private readonly fileRepository: Repository<File>
  ) {}

  async create(file: Express.Multer.File) {
    const createdFile = this.fileRepository.create({ ...file });
    return await this.fileRepository.save(createdFile);
  }

  async findAll() {
    return await this.fileRepository.find();
  }
}
