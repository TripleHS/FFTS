import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressesService } from 'src/addresses/addresses.service';
import { Address } from 'src/dto/addresses/address.entity';
import { CreateOrganizerDto } from 'src/dto/organizers/create-organizer.dto';
import { EditOrganizerDto } from 'src/dto/organizers/edit-organizer.dto';
import { Organizer } from 'src/dto/organizers/organizer.entity';
import { OrganizerBuilder } from 'src/dto/organizers/organizer-builder';
import { User } from 'src/dto/users/user.entity';
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
      throw new Error(`User with id '${organizerDto.userId}' does not exist!`);
    }
    const address = await this.addressesService.findOne(organizerDto.addressId);
    if (!address) {
      throw new Error(
        `Address with id '${organizerDto.addressId}' does not exist!`,
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
      throw new Error(
        `Can't change address, desired address not registered to user!`,
      );
    }
  }

  async delete(id: string): Promise<void> {
    await this.organizersRepository.delete(id);
  }

  async edit(id: string, organizerDto: EditOrganizerDto): Promise<void> {
    const organizer = await this.getOne(id);
    if (!organizer) {
      throw new Error(`Organizer with id '${id}' does not exist!`);
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
