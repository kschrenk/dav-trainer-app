import { AfterInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class File {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  fieldname: string;

  @ApiProperty()
  @Column()
  originalname: string;

  @ApiProperty()
  @Column()
  encoding: string;

  @ApiProperty()
  @Column()
  mimetype: string;

  @ApiProperty()
  @Column()
  destination: string;

  @ApiProperty()
  @Column()
  filename: string;

  @ApiProperty()
  @Column()
  path: string;

  @ApiProperty()
  @Column()
  size: number;

  @AfterInsert()
  logInsert() {
    console.log('File created: ', this.path);
  }
}
