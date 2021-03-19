import { OmitType } from '@nestjs/swagger';
import { CreateWorkingHoursDto } from './create-working-hours.dto';

export class EditWorkingHoursDto extends OmitType(CreateWorkingHoursDto, [
  'organizerId',
] as const) {}
