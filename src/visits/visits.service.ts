import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { CreateVisitDto } from 'src/visits/dto/create-visit.dto';
import { EditVisitDto } from 'src/visits/dto/edit-visit.dto';
import { VisitBuilder } from 'src/visits/visit-builder';
import { Visit } from 'src/visits/entities/visit.entity';
import { OrganizersService } from 'src/organizers/organizers.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';

@Injectable()
export class VisitsService {
  constructor(
    @InjectRepository(Visit)
    private visitsRepository: Repository<Visit>,
    private usersService: UsersService,
    private organizersService: OrganizersService,
  ) {}

  getAll(): Promise<Visit[]> {
    return this.visitsRepository.find();
  }

  getOne(id: string): Promise<Visit> {
    return this.visitsRepository.findOne(id);
  }

  getAllByOrganizerId(organizerId: string): Promise<Visit[]> {
    return this.visitsRepository.find({
      where: {
        organizer: organizerId,
      },
    });
  }

  getAllByUserId(userId: string): Promise<Visit[]> {
    return this.visitsRepository.find({
      where: {
        users: userId,
      },
    });
  }

  async getAllParticipants(visitId: string): Promise<User[]> {
    return (await this.getOne(visitId)).users;
  }

  async create(visitDto: CreateVisitDto): Promise<Visit> {
    const users = await this.usersService.findAllById(visitDto.userIds);
    if (!users) {
      throw new HttpException(
        `Users ids missing or not existing.`,
        HttpStatus.BAD_REQUEST,
      );
    }
    const organizer = await this.organizersService.getOne(visitDto.organizerId);
    if (!organizer) {
      throw new HttpException(
        `Cannot find organizer with id ${visitDto.organizerId}.`,
        HttpStatus.BAD_REQUEST,
      );
    }
    const visit = new VisitBuilder()
      .visitDto(visitDto)
      .users(users)
      .organizer(organizer)
      .build();
    return this.visitsRepository.save(visit);
  }

  async delete(id: string): Promise<void> {
    await this.visitsRepository.delete(id);
  }

  async update(id: string, visitDto: EditVisitDto): Promise<void> {
    const visit = await this.getOne(id);
    if (!visit) {
      throw new HttpException(
        `Cannot find visit with id ${id}.`,
        HttpStatus.BAD_REQUEST,
      );
    }
    Object.entries(visitDto).forEach(([key, value]) => (visit[key] = value));
    await this.visitsRepository.save(visit);
  }

  async addUser(visitId: string, userId: string): Promise<void> {
    const visit = await this.getOne(visitId);
    if (!visit) {
      throw new HttpException(
        `Cannot find visit with id ${visitId}.`,
        HttpStatus.BAD_REQUEST,
      );
    }
    if (visit.users.filter(({ id }) => userId == id)) {
      const user = await this.usersService.findOne(userId);
      if (!user) {
        throw new HttpException(
          `Cannot find user with id ${userId}.`,
          HttpStatus.BAD_REQUEST,
        );
      }
      visit.users.push(user);
      this.visitsRepository.save(visit);
    }
  }

  async removeUser(visitId: string, userId: string): Promise<void> {
    const visit = await this.getOne(visitId);
    if (!visit) {
      throw new HttpException(
        `Cannot find visit with id ${visitId}.`,
        HttpStatus.BAD_REQUEST,
      );
    }
    const user = visit.users.filter(({ id }) => id == userId)[0];
    const userIndex = visit.users.indexOf(user);
    if (user) {
      visit.users.splice(userIndex, 1);
      this.visitsRepository.save(visit);
    }
  }
}
