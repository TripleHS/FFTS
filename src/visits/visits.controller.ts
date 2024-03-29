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
import { ValidationResult } from 'joi';
import { CreateVisitDto } from 'src/visits/dto/create-visit.dto';
import { EditVisitDto } from 'src/visits/dto/edit-visit.dto';
import {
  VisitCreationValidation,
  VisitEditionValidation,
} from './visit-validation';
import { VisitsService } from './visits.service';

@Controller('visits')
export class VisitsController {
  constructor(private visitsService: VisitsService) {}

  @Get()
  getAll() {
    return this.visitsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.visitsService.getOne(id);
  }

  @Get('user/:id')
  getAllByUserId(@Param('id') userId: string) {
    return this.visitsService.getAllByUserId(userId);
  }

  @Get('organizer/:id')
  getAllByOrganizerId(@Param('id') organizerId: string) {
    return this.visitsService.getAllByOrganizerId(organizerId);
  }

  @Get(':id/users')
  getAllUsersFromVisit(@Param('id') visitId: string) {
    return this.visitsService.getAllParticipants(visitId);
  }

  @Post()
  createNewVisit(@Body() visitDto: CreateVisitDto) {
    this.checkValidation(VisitCreationValidation.validate(visitDto));
    return this.visitsService.create(visitDto);
  }

  private checkValidation(visit: ValidationResult) {
    throw new HttpException(
      `${visit.error.details.map(({ message }) => message).join(' ')}`,
      HttpStatus.BAD_REQUEST,
    );
  }

  @Post(':id/users/:uid')
  addUserToVisit(@Param('id') visitId: string, @Param('uid') userId: string) {
    return this.visitsService.addUser(visitId, userId);
  }

  @Delete(':id/users/:uid')
  removeUserFromVisit(
    @Param('id') visitId: string,
    @Param('uid') userId: string,
  ) {
    return this.visitsService.removeUser(visitId, userId);
  }

  @Delete(':id')
  removeVisit(@Param('id') visitId: string) {
    return this.visitsService.delete(visitId);
  }

  @Patch(':id')
  updateVisit(@Param('id') visitId: string, @Body() visitDto: EditVisitDto) {
    this.checkValidation(VisitEditionValidation.validate(visitDto));
    return this.visitsService.update(visitId, visitDto);
  }
}
