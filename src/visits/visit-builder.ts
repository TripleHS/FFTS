import { Organizer } from '../organizers/entities/organizer.entity';
import { User } from '../dto/users/user.entity';
import { CreateVisitDto } from './dto/create-visit.dto';
import { Visit } from './entities/visit.entity';

export class VisitBuilder {
  private visit: Visit;

  constructor() {
    this.visit = new Visit();
  }

  visitDto(visitDto: CreateVisitDto): VisitBuilder {
    Object.entries(visitDto)
      .filter(([key]) => key !== 'userId' && key !== 'organizerId')
      .forEach(
        ([key, value]) =>
          (this.visit[key] = value instanceof String ? value.trim() : value),
      );
    return this;
  }

  users(users: User[]): VisitBuilder {
    this.visit.users = users;
    return this;
  }

  organizer(organizer: Organizer): VisitBuilder {
    this.visit.organizer = organizer;
    return this;
  }

  build(): Visit {
    return this.visit;
  }
}
