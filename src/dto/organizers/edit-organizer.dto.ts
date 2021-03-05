import { OmitType } from '@nestjs/swagger';
import { CreateOrganizer } from './create-organizer.dto';

export class EditOrganizer extends OmitType(CreateOrganizer, [
  'userId',
] as const) {}
