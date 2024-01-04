import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './course.entity';
import { Repository } from 'typeorm';
import { CourseAsJSON } from '../converter/types';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>
  ) {}

  async findAll() {
    return this.courseRepository.find();
  }

  async createFromJSON(courseListAsJSON: CourseAsJSON[]) {
    console.log(
      '🚀 ~ file: course.service.ts:15 ~ CourseService ~ createFromJSON ~ courseListAsJSON:',
      courseListAsJSON
    );
    courseListAsJSON.forEach(async (course) => {
      this.courseRepository.create(course);
      await this.courseRepository.save(course);
    });
  }
}
