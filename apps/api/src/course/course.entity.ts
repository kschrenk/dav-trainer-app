import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Course {
  @PrimaryColumn()
  @ApiProperty({ example: 'MUC-24-0170' })
  bookingCode: string;

  @Column()
  @ApiProperty()
  startDate: Date;

  @Column()
  @ApiProperty({ example: '19.01.24' })
  dates: string;

  @Column()
  @ApiPropertyOptional({ example: 'Do 14:45-17:45' })
  time: string;

  @Column()
  @ApiProperty({ example: '10-13' })
  age: string;

  @Column()
  @ApiProperty({
    example: 'Schnupperkletterkurs indoor',
  })
  title: string;

  @Column()
  @ApiProperty({ example: 'Kurs' })
  type: string;

  @Column()
  @ApiProperty({ example: '	Sportklettern in k.A.Schnupperklettern' })
  level: string;

  @Column()
  @ApiPropertyOptional({
    example: 'Dortmunder Hütte',
    description: 'A climbing gym or a mountain hut',
  })
  quarters: string;

  @Column()
  @ApiProperty({ example: 'München' })
  location: string;

  @Column()
  @ApiPropertyOptional({ example: 'Bus und Bahn' })
  travelDescription: string;

  @Column()
  @ApiProperty({ example: 'sportklettern' })
  category: string;
}
