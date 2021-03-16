import { OmitType } from '@nestjs/swagger';
import { Specialization } from '../entities/specialization.entity';

export class CreateSpecializationDto extends OmitType(Specialization, [
  'id',
] as const) {}
