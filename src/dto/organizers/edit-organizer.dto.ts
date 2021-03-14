import { OmitType } from '@nestjs/swagger';
import { CreateOrganizerDto } from './create-organizer.dto';

export class EditOrganizerDto extends OmitType(CreateOrganizerDto, [
  'userId',
] as const) {}
