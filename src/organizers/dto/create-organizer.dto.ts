import { OmitType } from '@nestjs/swagger';
import { Organizer } from '../entities/organizer.entity';

export class CreateOrganizerDto extends OmitType(Organizer, [
  'id',
  'user',
  'address',
  'visits',
] as const) {
  userId: string;
  addressId: string;
}
