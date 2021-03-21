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
    this.checkValidation(AddressCreationValidation.validate(addressDto));
    return this.addressesService.create(addressDto);
  }

  private checkValidation(address: ValidationResult) {
    if (address.error) {
      throw new HttpException(
        `${address.error.details.map(({ message }) => message).join(' ')}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete(':id')
  deleteAddress(@Param('id') id: string) {
    return this.addressesService.remove(id);
  }

  @Patch(':id')
  editFields(@Param('id') id: string, @Body() addressDto: EditAddressDto) {
    this.checkValidation(AddressEditionValidation.validate(addressDto));
    return this.addressesService.edit(id, addressDto);
  }
}
