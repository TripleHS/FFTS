import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/users/create-user.dto';
import { User } from 'src/dto/users/user.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findAllById(userIds: string[]): Promise<User[]> {
    return this.usersRepository.find({
      where: {
        id: In(userIds),
      },
    });
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.usersRepository.save(createUserDto);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
