import { OmitType } from '@nestjs/swagger';
import { Organizer } from './organizer.entity';

export class CreateOrganizerDto extends OmitType(Organizer, [
  'id',
  'user',
  'address',
] as const) {
  userId: string;
  addressId: string;
}
