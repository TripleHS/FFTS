import { OmitType } from '@nestjs/swagger';
import { Organizer } from './organizer.entity';

export class CreateOrganizer extends OmitType(Organizer, [
  'id',
  'user',
] as const) {
  userId: number;
}
