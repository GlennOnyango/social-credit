import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/user/dtos/create-user.dto';
import { AuthenticationService } from './authentication.service';
@Controller('authentication')
export class AuthenticationController {
  constructor(private authService: AuthenticationService) {}

  @Post('register')
  register(@Body() user: CreateUserDTO) {
    return this.authService.register(user);
  }

  @Post('login')
  login() {
    return { message: 'This will handle user login' };
  }
}
