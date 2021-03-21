import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateWorkingHoursDto } from './dto/create-working-hours.dto';
import { EditWorkingHoursDto } from './dto/edit-working-hours.dto';
import { WorkingHoursCreationValidation } from './working-hours-validation';
import { WorkingHoursService } from './working-hours.service';

@Controller('working-hours')
export class WorkingHoursController {
  constructor(private workingHoursService: WorkingHoursService) {}

  @Get()
  getAll() {
    return this.workingHoursService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.workingHoursService.getById(id);
  }

  @Get('organizer/:id')
  getAllByOrganizer(@Param('id') organizerId: string) {
    return this.workingHoursService.getAllByOrganizerId(organizerId);
  }

  @Get('day/:date')
  getAllByDate(@Param('date') date: Date) {
    return this.workingHoursService.getAllByDay(date);
  }

  @Post()
  createWorkingHours(@Body() workingHoursDto: CreateWorkingHoursDto) {
    const workingHours = WorkingHoursCreationValidation.validate(
      workingHoursDto,
    );
    if (workingHours.error) {
      throw new HttpException(
        `${workingHours.error.details.map(({ message }) => message).join(' ')}`,
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.workingHoursService.create(workingHoursDto);
  }

  @Patch(':id')
  updateWorkingHours(
    @Param('id') id: string,
    @Body() workingHoursDto: EditWorkingHoursDto,
  ) {
    return this.workingHoursService.update(id, workingHoursDto);
  }

  @Delete(':id')
  deleteWorkingHours(@Param('id') id: string) {
    return this.workingHoursService.remove(id);
  }
}
