import { OmitType } from '@nestjs/swagger';
import { WorkingHours } from '../entites/working-hours.entity';

export class CreateWorkingHoursDto extends OmitType(WorkingHours, [
  'id',
] as const) {}
