import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { FileModule } from './file/file.module';
import { File } from './file/file.entity';
import { CourseModule } from './course/course.module';
import { Course } from './course/course.entity';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { User } from './user/user.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [File, Course, User],
      synchronize: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    FileModule,
    CourseModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
