import { Controller, Get } from '@nestjs/common';
import { CourseService } from './course.service';
import { Course } from './course.entity';
import { ApiResponse } from '@nestjs/swagger';

@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Get()
  @ApiResponse({ status: 200, type: [Course] })
  async findAll() {
    return this.courseService.findAll();
  }
}
