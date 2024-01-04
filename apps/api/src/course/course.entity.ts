import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Course {
  @PrimaryColumn()
  bookingCode: string;

  @Column()
  startDate: Date;

  @Column()
  dates: string;

  @Column()
  time: string;

  @Column()
  age: string;

  @Column()
  title: string;

  @Column()
  area: string;

  @Column()
  type: string;

  @Column()
  level: string;

  @Column()
  quarters: string;

  @Column()
  location: string;

  @Column()
  travelDescription: string;
}
