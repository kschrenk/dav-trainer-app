import { Injectable } from '@nestjs/common';
import ExcelJs from 'exceljs';
import { File } from '../file/file.entity';
import { CourseAsJSON } from './types';

@Injectable()
export class ConverterService {
  async convertFileToJSON(file: File) {
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(file.path);

    const worksheet = workbook.getWorksheet(1);
    const courseListAsJSON: CourseAsJSON[] = [];

    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber > 3) {
        const course = {
          bookingCode: row.getCell('A').value.toString(),
          startDate: row.getCell('B').value.toString(),
          dates: row.getCell('C').value.toString(),
          time: row.getCell('D').value.toString(),
          age: row.getCell('E').value.toString(),
          title: row.getCell('F').value.toString(),
          area: row.getCell('G').value.toString(),
          type: row.getCell('H').value.toString(),
          level: row.getCell('I').value.toString(),
          quarters: row.getCell('J').value.toString(),
          location: row.getCell('K').value.toString(),
          travelDescription: row.getCell('L').value.toString(),
        };
        courseListAsJSON.push(course);
      }
    });

    return courseListAsJSON;
  }
}
