import { Organizer } from '../organizers/organizer.entity';
import { User } from '../users/user.entity';
import { CreateVisitDto } from './create-visit.dto';
import { Visit } from './visit.entity';

export class VisitBuilder {
  private visit: Visit;

  constructor() {
    this.visit = new Visit();
  }

  visitDto(visitDto: CreateVisitDto): VisitBuilder {
    Object.entries(visitDto)
      .filter(([key]) => key !== 'userId' && key !== 'organizerId')
      .forEach(([key, value]) => (this.visit[key] = value.trim()));
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
