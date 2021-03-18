import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateAddressDto } from 'src/addresses/dto/create-address.dto';
import { EditAddressDto } from 'src/addresses/dto/edit-address.dto';
import {
  AddressCreationValidation,
  AddressEditionValidation,
} from './address-validation';
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
    const address = AddressCreationValidation.validate(addressDto);
    if (address.error) {
      return address.error;
    }
    return this.addressesService.create(addressDto);
  }

  @Delete(':id')
  deleteAddress(@Param('id') id: string) {
    return this.addressesService.remove(id);
  }

  @Patch(':id')
  editFields(@Param('id') id: string, @Body() addressDto: EditAddressDto) {
    const address = AddressEditionValidation.validate(addressDto);
    if (address.error) {
      return address.error;
    }
    return this.addressesService.edit(id, addressDto);
  }
}
