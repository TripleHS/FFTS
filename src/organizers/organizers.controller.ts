import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateOrganizerDto } from 'src/organizers/dto/create-organizer.dto';
import { EditOrganizerDto } from 'src/organizers/dto/edit-organizer.dto';
import {
  OrganizerCreationValidation,
  OrganizerEditionValidation,
} from './organizer-validation';
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

  @Get('address/:id')
  getAllOrganizersByAddressId(@Param('id') addressId: string) {
    return this.organizersService.getAllByAddressId(addressId);
  }

  @Post()
  create(@Body() organizerDto: CreateOrganizerDto) {
    const organizer = OrganizerCreationValidation.validate(organizerDto);
    if (organizer.error) {
      return organizer.error;
    }
    return this.organizersService.create(organizerDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.organizersService.delete(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() organizerDto: EditOrganizerDto) {
    const organizer = OrganizerEditionValidation.validate(organizerDto);
    if (organizer.error) {
      return organizer.error;
    }
    return this.organizersService.edit(id, organizerDto);
  }
}
