import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateAddressDto } from 'src/dto/addresses/create-address.dto';
import { EditAddressDto } from 'src/dto/addresses/edit-address.dto';
import { AddressesService } from './addresses.service';

@Controller('addresses')
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  @Get()
  getAllUsers() {
    return this.addressesService.findAll();
  }

  @Get(':id')
  getAddressById(@Param('id') id: string) {
    return this.addressesService.findOne(id);
  }

  @Get('user/:id')
  getAddressesByUserId(@Param('id') id: string) {
    return this.addressesService.findByUserId(id);
  }

  @Post()
  addAddress(@Body() addressDto: CreateAddressDto) {
    return this.addressesService.create(addressDto);
  }

  @Delete(':id')
  deleteAddress(@Param('id') id: string) {
    return this.addressesService.remove(id);
  }

  @Patch(':id')
  editFields(@Param('id') id: string, @Body() addressDto: EditAddressDto) {
    return this.addressesService.edit(id, addressDto);
  }
}
