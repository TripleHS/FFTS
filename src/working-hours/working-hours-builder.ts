import { Organizer } from 'src/organizers/entities/organizer.entity';
import { CreateWorkingHoursDto } from './dto/create-working-hours.dto';
import { WorkingHours } from './entities/working-hours.entity';

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

  organizer(organizer: Organizer): WorkingHoursBuilder {
    this.workingHours.organizer = organizer;
    return this;
  }

  build(): WorkingHours {
    return this.workingHours;
  }
}
