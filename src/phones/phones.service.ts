import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePhoneDto } from 'src/phones/dto/create-phone.dto';
import { Phone } from 'src/phones/entities/phone.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';

@Injectable()
export class PhonesService {
  constructor(
    @InjectRepository(Phone)
    private phoneRepository: Repository<Phone>,
    private usersService: UsersService,
  ) {}

  findAll(): Promise<Phone[]> {
    return this.phoneRepository.find();
  }

  findOne(id: string): Promise<Phone> {
    return this.phoneRepository.findOne(id);
  }

  findByUserId(userId: string): Promise<Phone[]> {
    return this.phoneRepository.find({
      where: {
        user: userId,
      },
    });
  }

  async create(phoneDto: CreatePhoneDto): Promise<Phone> {
    const user = await this.usersService.findOne(phoneDto.userId);
    if (!user) {
      throw new HttpException(
        `User with id ${phoneDto.userId} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    const phone = new Phone();
    phone.phoneNumber = phoneDto.phoneNumber;
    phone.phoneType = phoneDto.phoneType;
    phone.user = user;
    return this.phoneRepository.save(phone);
  }

  async remove(id: string): Promise<void> {
    await this.phoneRepository.delete(id);
  }
}
