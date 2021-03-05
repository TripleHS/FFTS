import { OmitType } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { Address } from './address.entity';

export class CreateAddressDto extends OmitType(Address, [
  'id',
  'user',
] as const) {
  @IsNumber()
  userId: number;
}
