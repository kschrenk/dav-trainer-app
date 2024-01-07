import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { promisify } from 'util';
import { scrypt as _scrypt, randomBytes } from 'crypto';
import { UserDto } from '../user/dto/user.dto';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async signup(user: CreateUserDto) {
    const userFound = await this.userService.findOne(user.email);

    if (userFound) {
      throw new BadRequestException('email in use');
    }

    const salt = randomBytes(8).toString('hex');
    const hash = (await scrypt(user.password, salt, 32)) as Buffer;

    const result = salt + '.' + hash.toString('hex');
    const newUser = { ...user, password: result };

    return this.userService.create(newUser);
  }

  async login({ email, uuid }: UserDto) {
    return {
      access_token: this.jwtService.sign({
        email,
        uuid,
      }),
    };
  }

  async validateUser(username: string, password: string): Promise<UserDto> {
    const userFound = await this.userService.findOne(username);

    if (!userFound) {
      throw new NotFoundException('invalid credentials');
    }

    const [salt, storedHash] = userFound.password.split('.');

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (storedHash !== hash.toString('hex')) {
      return null;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...result } = userFound;

    return result;
  }
}
