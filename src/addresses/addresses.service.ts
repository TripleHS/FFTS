import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAddressDto } from 'src/dto/addresses/create-address.dto';
import { EditAddressDto } from 'src/dto/addresses/edit-address.dto';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { Address } from './address.entity';
import { AddressBuilder } from './AddressBuilder';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(Address)
    private addressesRepository: Repository<Address>,
    private usersService: UsersService,
  ) {}

  findAll(): Promise<Address[]> {
    return this.addressesRepository.find();
  }

  findOne(id: string): Promise<Address> {
    return this.addressesRepository.findOne(id);
  }

  findByUserId(userId: string): Promise<Address[]> {
    return this.addressesRepository.find({
      where: {
        user: userId,
      },
    });
  }

  async create(addressDto: CreateAddressDto): Promise<Address> {
    const address = new AddressBuilder()
      .addressDto(addressDto)
      .user(await this.usersService.findOne(`${addressDto.userId}`))
      .build();
    return this.addressesRepository.save(address);
  }

  async remove(id: string): Promise<void> {
    await this.addressesRepository.delete(id);
  }

  async edit(id: string, addressDto: EditAddressDto): Promise<void> {
    const address = await this.findOne(id);
    Object.entries(addressDto).forEach(async ([key, value]) =>
      key == 'userId'
        ? (address.user = await this.usersService.findOne(key))
        : (address[key] = value),
    );
    await this.addressesRepository.save(address);
  }
}
