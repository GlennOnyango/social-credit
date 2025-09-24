import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from 'src/user/dtos/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserResponseDTO } from './dtos/user-response.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUser(user: CreateUserDTO): Promise<UserResponseDTO> {
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
