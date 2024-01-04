import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileController } from './file.controller';
import { FileService } from './file.service';
import { File } from './file.entity';
import { CourseModule } from '../course/course.module';
import { ConverterModule } from '../converter/converter.module';

@Module({
  imports: [TypeOrmModule.forFeature([File]), CourseModule, ConverterModule],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
