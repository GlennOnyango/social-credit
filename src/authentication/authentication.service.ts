import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from 'src/user/dtos/create-user.dto';
import { UserResponseDTO } from 'src/user/dtos/user-response.dto';
import { User } from 'src/database/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async register(user: CreateUserDTO): Promise<UserResponseDTO> {
    const newUser = this.usersRepository.create({
      ...user,
      profile: {},
    });
    const savedUser = await this.usersRepository.save(newUser);
    return {
      id: savedUser.id,
      email: savedUser.email,
      isActive: savedUser.isActive,
      createdAt: savedUser.createdAt,
      updatedAt: savedUser.updatedAt,
    };
  }
}
