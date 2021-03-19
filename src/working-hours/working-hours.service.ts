import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrganizersService } from 'src/organizers/organizers.service';
import { Repository } from 'typeorm';
import { CreateWorkingHoursDto } from './dto/create-working-hours.dto';
import { WorkingHours } from './entites/working-hours.entity';
import { WorkingHoursBuilder } from './working-hours-builder';

@Injectable()
export class WorkingHoursService {
  constructor(
    @InjectRepository(WorkingHours)
    private readonly workingHoursRepository: Repository<WorkingHours>,
    private organizersService: OrganizersService,
  ) {}

  getAll(): Promise<WorkingHours[]> {
    return this.workingHoursRepository.find();
  }

  getAllByOrganizerId(organizerId: string): Promise<WorkingHours[]> {
    return this.workingHoursRepository.find({
      where: {
        organizer: organizerId,
      },
    });
  }

  getById(id: string): Promise<WorkingHours> {
    return this.workingHoursRepository.findOne(id);
  }

  getAllByDay(date: Date): Promise<WorkingHours[]> {
    return this.workingHoursRepository.find({
      where: {
        date: date.getDate(),
      },
    });
  }

  async create(workingHoursDto: CreateWorkingHoursDto): Promise<WorkingHours> {
    const organizer = await this.organizersService.getOne(
      workingHoursDto.organizerId,
    );
    if (!organizer) {
      throw new HttpException(
        `Cannot find organizer with id ${workingHoursDto.organizerId}.`,
        HttpStatus.NOT_FOUND,
      );
    }
    if (workingHoursDto.lunchTime && !workingHoursDto.lunchDuration) {
      workingHoursDto.lunchDuration = 15;
    }
    const workingHours = new WorkingHoursBuilder()
      .workingHoursDto(workingHoursDto)
      .organizer(organizer)
      .build();
    return this.workingHoursRepository.save(workingHours);
  }
}
