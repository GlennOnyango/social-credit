import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dtos/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() user: CreateUserDTO) {
    console.log('Creating user:', user);
    return this.userService.createUser(user);
  }

  @Get()
  getAllUsers() {
    return { message: 'This will return all users' };
  }
}
