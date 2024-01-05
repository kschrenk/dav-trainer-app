import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileModule } from './file/file.module';
import { File } from './file/file.entity';
import { CourseModule } from './course/course.module';
import { Course } from './course/course.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [File, Course],
      synchronize: true,
    }),
    FileModule,
    CourseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
