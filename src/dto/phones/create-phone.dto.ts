import { OmitType } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';
import { Phone } from './phone.entity';

export class CreatePhoneDto extends OmitType(Phone, ['user'] as const) {
  @IsUUID()
  userId: string;
}
