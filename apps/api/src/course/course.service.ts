import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './course.entity';
import { Repository } from 'typeorm';
import { File } from '../file/file.entity';
import ExcelJs from 'exceljs';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>
  ) {}

  async findAll() {
    return this.courseRepository.find();
  }

  async createFromFile(file: File) {
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(file.path);
    const worksheet = workbook.getWorksheet(1);

    worksheet.eachRow(async (row, rowNumber) => {
      if (rowNumber > 3) {
        const course = new Course();
        course.bookingCode = row.getCell('A').value.toString();
        course.startDate = new Date(row.getCell('B').value.toString());
        course.dates = row.getCell('C').value.toString();
        course.time = row.getCell('D').value.toString();
        course.age = row.getCell('E').value.toString();
        course.title = row.getCell('F').value.toString();
        course.type = row.getCell('H').value.toString();
        course.level = row.getCell('I').value.toString();
        course.quarters = row.getCell('J').value.toString();
        course.location = row.getCell('K').value.toString();
        course.travelDescription = row.getCell('L').value.toString();
        const categoryName = row
          .getCell('G')
          .value.toString()
          .toLowerCase()
          .trim()
          .replace(/\s/g, '-');
        course.category = categoryName;
        const courseCreated = this.courseRepository.create(course);
        await this.courseRepository.save(courseCreated);
      }
    });
  }
}
