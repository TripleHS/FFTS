import { OmitType } from '@nestjs/swagger';
import { CreateVisitDto } from './create-visit.dto';

export class EditVisitDto extends OmitType(CreateVisitDto, [
  'organizerId',
  'userIds',
] as const) {}
