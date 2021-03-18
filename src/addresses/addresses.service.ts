import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAddressDto } from 'src/addresses/dto/create-address.dto';
import { EditAddressDto } from 'src/addresses/dto/edit-address.dto';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { Address } from './entities/address.entity';
import { AddressBuilder } from './address-builder';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(Address)
    private addressesRepository: Repository<Address>,
    private usersService: UsersService,
  ) {}

  findAll(): Promise<Address[]> {
    return this.addressesRepository.find({ relations: ['user'] });
  }

  findOne(id: string): Promise<Address> {
    return this.addressesRepository.findOne(id, { relations: ['user'] });
  }

  findByUserId(userId: string): Promise<Address[]> {
    return this.addressesRepository.find({
      where: {
        user: userId,
      },
    });
  }

  async create(addressDto: CreateAddressDto): Promise<Address> {
    const user = await this.usersService.findOne(addressDto.userId);
    if (!user) {
      throw new Error(`User with id '${addressDto.userId}' does not exist!`);
    }
    const address = new AddressBuilder()
      .addressDto(addressDto)
      .user(user)
      .build();
    return this.addressesRepository.save(address);
  }

  async remove(id: string): Promise<void> {
    await this.addressesRepository.delete(id);
  }

  async edit(id: string, addressDto: EditAddressDto): Promise<void> {
    const address = await this.findOne(id);
    if (!address) {
      return;
    }
    Object.entries(addressDto).forEach(
      ([key, value]) => (address[key] = value.trim()),
    );
    await this.addressesRepository.save(address);
  }
}
