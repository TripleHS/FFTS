import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateOrganizer } from 'src/dto/organizers/create-organizer.dto';
import { EditOrganizer } from 'src/dto/organizers/edit-organizer.dto';
import { OrganizersService } from './organizers.service';

@Controller('organizers')
export class OrganizersController {
  constructor(private readonly organizersService: OrganizersService) {}

  @Get()
  getAll() {
    return this.organizersService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.organizersService.getOne(id);
  }

  @Get('user/:id')
  getAllByUserId(@Param('id') userId: string) {
    return this.organizersService.getAllByUserId(userId);
  }

  @Post()
  create(@Body() organizerDto: CreateOrganizer) {
    return this.organizersService.create(organizerDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.organizersService.delete(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() organizerDto: EditOrganizer) {
    return this.organizersService.edit(id, organizerDto);
  }
}
