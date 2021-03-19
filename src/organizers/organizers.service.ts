import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressesService } from 'src/addresses/addresses.service';
import { Address } from 'src/addresses/entities/address.entity';
import { CreateOrganizerDto } from 'src/organizers/dto/create-organizer.dto';
import { EditOrganizerDto } from 'src/organizers/dto/edit-organizer.dto';
import { Organizer } from 'src/organizers/entities/organizer.entity';
import { OrganizerBuilder } from 'src/organizers/organzier-builder';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';

@Injectable()
export class OrganizersService {
  constructor(
    @InjectRepository(Organizer)
    private organizersRepository: Repository<Organizer>,
    private usersService: UsersService,
    private addressesService: AddressesService,
  ) {}

  getAll(): Promise<Organizer[]> {
    return this.organizersRepository.find({ relations: ['user', 'address'] });
  }

  getOne(id: string): Promise<Organizer> {
    return this.organizersRepository.findOne(id, {
      relations: ['user', 'address'],
    });
  }

  getAllByUserId(userId: string): Promise<Organizer[]> {
    return this.organizersRepository.find({
      where: { user: userId },
      relations: ['address'],
    });
  }

  getAllByAddressId(addressId: string): Promise<Organizer[]> {
    return this.organizersRepository.find({
      where: { address: addressId },
      relations: ['user'],
    });
  }

  async create(organizerDto: CreateOrganizerDto): Promise<Organizer> {
    const user = await this.usersService.findOne(organizerDto.userId);
    if (!user) {
      throw new HttpException(
        `Cannot find user with id ${organizerDto.userId}.`,
        HttpStatus.BAD_REQUEST,
      );
    }
    const address = await this.addressesService.findOne(organizerDto.addressId);
    if (!address) {
      throw new HttpException(
        `Cannot find address with id ${organizerDto.addressId}.`,
        HttpStatus.BAD_REQUEST,
      );
    }
    this.addressRegistered(user, address);
    const organizer = new OrganizerBuilder()
      .organizerDto(organizerDto)
      .user(user)
      .address(address)
      .build();
    return this.organizersRepository.save(organizer);
  }

  private async addressRegistered(user: User, address: Address) {
    if (!user.addresses.filter(({ id }) => id == address.id)) {
      throw new HttpException(
        `Can't change address, desired address not registered to user!`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async delete(id: string): Promise<void> {
    await this.organizersRepository.delete(id);
  }

  async edit(id: string, organizerDto: EditOrganizerDto): Promise<void> {
    const organizer = await this.getOne(id);
    if (!organizer) {
      throw new HttpException(
        `Cannot find organizer with id ${id}.`,
        HttpStatus.BAD_REQUEST,
      );
    }
    Object.entries(organizerDto).forEach(async ([key, value]) =>
      key === 'addressId'
        ? (organizer[key] = await this.changeAddress(organizer, value))
        : (organizer[key] = value),
    );
    await this.organizersRepository.save(organizer);
  }

  private async changeAddress(
    organizer: Organizer,
    addressId: string,
  ): Promise<void> {
    const address = await this.addressesService.findOne(addressId);
    const user = await this.usersService.findOne(organizer.user.id);
    await this.addressRegistered(user, address);
    organizer.address = address;
  }
}
