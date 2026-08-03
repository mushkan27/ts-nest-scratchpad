import { Controller, Body, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dtos';

@Controller('auth')
export class UsersController {
  @Post()
  createUser(@Body() body: CreateUserDto) {
    console.log(body);
  }
}
