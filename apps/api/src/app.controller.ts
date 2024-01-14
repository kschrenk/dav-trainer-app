import {
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Body,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { CreateUserDto } from './user/dto/create-user.dto';
import { ApiResponse } from '@nestjs/swagger';
import { UserDto } from './user/dto/user.dto';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Post('auth/signup')
  async register(@Body() body: CreateUserDto) {
    return this.authService.signup(body);
  }

  @UseGuards(LocalAuthGuard)
  @ApiResponse({ type: [UserDto] })
  @Post('auth/login')
  async login(@Request() req, @Res() res) {
    const { user } = req;
    const { access_token } = await this.authService.login(user);

    const expires = new Date();
    expires.setDate(expires.getDate() + 30);

    res.cookie('access_token', access_token, {
      expires,
      path: '/',
      domain: 'localhost',
    });

    res.status(HttpStatus.OK);

    return res.send(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
