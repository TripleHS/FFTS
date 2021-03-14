import { OmitType } from '@nestjs/swagger';
import { Visit } from './visit.entity';

export class CreateVisitDto extends OmitType(Visit, [
  'id',
  'organizer',
  'users',
] as const) {
  organizerId: string;
  userIds: string[];
}
