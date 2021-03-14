import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreatePhoneDto } from 'src/dto/phones/create-phone.dto';
import { PhonesService } from './phones.service';

@Controller('phones')
export class PhonesController {
  constructor(private readonly phonesService: PhonesService) {}

  @Get()
  getAllPhones() {
    return this.phonesService.findAll();
  }

  @Get(':id')
  getPhoneById(@Param('id') id: string) {
    return this.phonesService.findOne(id);
  }

  @Post()
  addPhone(@Body() phonesDto: CreatePhoneDto) {
    return this.phonesService.create(phonesDto);
  }

  @Delete(':id')
  deletePhone(@Param('id') id: string) {
    return this.phonesService.remove(id);
  }
}
