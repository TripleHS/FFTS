import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrganizersService } from 'src/organizers/organizers.service';
import { Repository } from 'typeorm';
import { WorkingHours } from './entites/working-hours.entity';

@Injectable()
export class WorkingHoursService {
  constructor(
    @InjectRepository(WorkingHours)
    private readonly workingHoursRepository: Repository<WorkingHours>,
    private organizersService: OrganizersService,
  ) {}
}
