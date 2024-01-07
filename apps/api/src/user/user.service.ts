import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(userData: CreateUserDto) {
    const user = this.repo.create(userData);

    return this.repo.save(user);
  }

  findOne(email: string) {
    return this.repo.findOne({ where: { email } });
  }
}
