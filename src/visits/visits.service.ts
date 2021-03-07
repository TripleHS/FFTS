import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateVisitDto } from 'src/dto/visits/create-visit.dto';
import { EditVisitDto } from 'src/dto/visits/edit-visit.dto';
import { VisitBuilder } from 'src/dto/visits/visit-builder';
import { Visit } from 'src/dto/visits/visit.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';

@Injectable()
export class VisitsService {
  constructor(
    @InjectRepository(Visit)
    private visitsRepository: Repository<Visit>,
    private usersService: UsersService,
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

  async create(visitDto: CreateVisitDto): Promise<Visit> {
    const users = await this.usersService.findAllById(visitDto.userIds);
    if (!users) {
      throw new Error('Cannot create visit, unknown users.');
    }
    const organizer = visitDto.organizerId;
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
}
