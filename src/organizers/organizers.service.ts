import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrganizer } from 'src/dto/organizers/create-organizer.dto';
import { EditOrganizer } from 'src/dto/organizers/edit-organizer.dto';
import { Organizer } from 'src/dto/organizers/organizer.entity';
import { OrganizerBuilder } from 'src/dto/organizers/organzier-builder';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';

@Injectable()
export class OrganizersService {
  constructor(
    @InjectRepository(Organizer)
    private organizersRepository: Repository<Organizer>,
    private usersService: UsersService,
  ) {}

  getAll(): Promise<Organizer[]> {
    return this.organizersRepository.find();
  }

  getOne(id: string): Promise<Organizer> {
    return this.organizersRepository.findOne(id);
  }

  getAllByUserId(userId: string): Promise<Organizer[]> {
    return this.organizersRepository.find({ where: { user: userId } });
  }

  async create(organizerDto: CreateOrganizer): Promise<Organizer> {
    const user = await this.usersService.findOne(`${organizerDto.userId}`);
    if (!user) {
      throw new Error(`User with id '${organizerDto.userId}' does not exist!`);
    }
    const organizer = new OrganizerBuilder()
      .organizerDto(organizerDto)
      .user(user)
      .build();
    return this.organizersRepository.save(organizer);
  }

  async delete(id: string): Promise<void> {
    await this.organizersRepository.delete(id);
  }

  async edit(id: string, organizerDto: EditOrganizer): Promise<void> {
    const organizer = await this.getOne(id);
    if (!organizer) {
      throw new Error(`Organizer with id '${id}' does not exist!`);
    }
    Object.entries(organizerDto).forEach(
      ([key, value]) => (organizer[key] = value),
    );
    await this.organizersRepository.save(organizer);
  }
}
