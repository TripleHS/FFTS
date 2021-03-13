import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/dto/users/user.entity';
import { CreateVisitDto } from 'src/dto/visits/create-visit.dto';
import { EditVisitDto } from 'src/dto/visits/edit-visit.dto';
import { VisitBuilder } from 'src/dto/visits/visit-builder';
import { Visit } from 'src/dto/visits/visit.entity';
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
      throw new Error('Cannot create visit, unknown users.');
    }
    const organizer = await this.organizersService.getOne(visitDto.organizerId);
    if (!organizer) {
      throw new Error('Cannot create visit, unknown organizer.');
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
      throw new Error(`Visit with id '${id}' does not exist!`);
    }
    Object.entries(visitDto).forEach(([key, value]) =>
      key === 'userIds' ? this.updateUsers(visit, value) : (visit[key] = value),
    );
    await this.visitsRepository.save(visit);
  }

  private async updateUsers(visit: Visit, userIds: string[]): Promise<void> {
    const users = await this.usersService.findAllById(userIds);
    if (!users) {
      throw new Error(`Cannot edit visit, unknown users.`);
    }
    visit.users = users;
  }

  async addUser(visitId: string, userId: string): Promise<void> {
    const visit = await this.getOne(visitId);
    if (!visit) {
      throw new Error();
    }
    if (visit.users.filter(({ id }) => userId == id)) {
      const user = await this.usersService.findOne(userId);
      if (!user) {
        throw new Error();
      }
      visit.users.push(user);
      this.visitsRepository.save(visit);
    }
  }

  async removeUser(visitId: string, userId: string): Promise<void> {
    const visit = await this.getOne(visitId);
    if (!visit) {
      throw new Error();
    }
    const user = visit.users.filter(({ id }) => id == userId)[0];
    const userIndex = visit.users.indexOf(user);
    if (user) {
      visit.users.splice(userIndex, 1);
      this.visitsRepository.save(visit);
    }
  }
}
