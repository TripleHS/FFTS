import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateVisitDto } from 'src/dto/visits/create-visit.dto';
import { EditVisitDto } from 'src/dto/visits/edit-visit.dto';
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
    return this.visitsService.create(visitDto);
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
    return this.visitsService.update(visitId, visitDto);
  }
}
