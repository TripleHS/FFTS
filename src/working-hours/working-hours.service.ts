import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrganizersService } from 'src/organizers/organizers.service';
import { Repository } from 'typeorm';
import { CreateWorkingHoursDto } from './dto/create-working-hours.dto';
import { EditWorkingHoursDto } from './dto/edit-working-hours.dto';
import { WorkingHours } from './entities/working-hours.entity';
import { WorkingHoursBuilder } from './working-hours-builder';
import { fillMissing } from 'object-fill-missing-keys';
import { WorkingHoursEditionValidation } from './working-hours-validation';

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
      where: [{ date: date }, { shiftEndDate: date }],
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
    this.validateHours(workingHoursDto);
    if (workingHoursDto.lunchTime && !workingHoursDto.lunchDuration) {
      workingHoursDto.lunchDuration = 15;
    }
    const workingHours = new WorkingHoursBuilder()
      .workingHoursDto(workingHoursDto)
      .organizer(organizer)
      .build();
    return this.workingHoursRepository.save(workingHours);
  }

  private validateHours({
    shiftEndDate,
    startHour,
    endHour,
    lunchTime,
  }: CreateWorkingHoursDto) {
    const error: string[] = [];
    if (startHour > endHour && !shiftEndDate) {
      error.push(
        `Cannot add end hours before start or missing shift end date.`,
      );
    }
    if (
      (lunchTime < startHour && !shiftEndDate) ||
      (lunchTime > endHour && !shiftEndDate)
    ) {
      error.push(`Lunch hour must be between start and end hours.`);
    }
    if (error.length) {
      throw new HttpException(`${error.join(' ')}`, HttpStatus.BAD_REQUEST);
    }
  }

  async update(
    id: string,
    workingHoursDto: EditWorkingHoursDto,
  ): Promise<void> {
    const workingHours = await this.getById(id);
    if (!workingHours) {
      throw new HttpException(
        `Cannot find working hours with id ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }
    const { id: idx, ...filledDto } = fillMissing(
      workingHoursDto,
      Object.assign({}, workingHours),
      {
        placeholder: true,
        doNotFillThesePathsIfTheyContainPlaceholders: Object.keys(
          workingHoursDto,
        ),
        useNullAsExplicitFalse: true,
      },
    );
    this.validateHours(filledDto as CreateWorkingHoursDto);
    if (filledDto.lunchTime && !filledDto.lunchDuration) {
      filledDto.lunchDuration = 15;
    }
    const workingHoursEdit = WorkingHoursEditionValidation.validate(
      filledDto as EditWorkingHoursDto,
    );
    if (workingHoursEdit.error) {
      throw new HttpException(
        `${workingHoursEdit.error.details
          .map(({ message }) => message)
          .join(' ')}`,
        HttpStatus.BAD_REQUEST,
      );
    }
    Object.entries(filledDto).forEach(
      ([key, value]) => (workingHours[key] = value),
    );
    await this.workingHoursRepository.save(workingHours);
  }

  async remove(id: string): Promise<void> {
    await this.workingHoursRepository.delete(id);
  }
}
