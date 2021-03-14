import { CreateWorkingHoursDto } from './create-working-hours.dto';
import { WorkingHours } from './working-hours.entity';

export class WorkingHoursBuilder {
  private workingHours: WorkingHours;

  constructor() {
    this.workingHours = new WorkingHours();
  }

  workingHoursDto(workingHoursDto: CreateWorkingHoursDto): WorkingHoursBuilder {
    Object.entries(workingHoursDto).forEach(
      ([key, value]) =>
        (this.workingHours[key] =
          value instanceof String ? value.trim() : value),
    );
    return this;
  }

  build(): WorkingHours {
    return this.workingHours;
  }
}
