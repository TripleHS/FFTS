import { OmitType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Address } from './address.entity';

export class CreateAddressDto extends OmitType(Address, [
  'id',
  'user',
  'organizers',
] as const) {
  @IsString()
  userId: string;
}
