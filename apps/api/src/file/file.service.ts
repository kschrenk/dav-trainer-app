import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(File) private readonly fileRepository: Repository<File>
  ) {}

  async create(name: string) {
    const file = this.fileRepository.create({ name });
    return await this.fileRepository.save(file);
  }

  async findAll() {
    return await this.fileRepository.find();
  }
}
