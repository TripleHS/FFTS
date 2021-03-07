import { User } from '../users/user.entity';
import { CreateVisitDto } from './create-visit.dto';
import { Visit } from './visit.entity';

export class VisitBuilder {
  private visit;

  constructor() {
    this.visit = new Visit();
  }

  visitDto(visitDto: CreateVisitDto): VisitBuilder {
    Object.entries(visitDto).forEach(([key, value]) =>
      this.updateField(key, value),
    );
    return this;
  }

  private updateField(key: string, value: string): void {
    if (key !== 'userId' && key !== 'organizerId') {
      this.visit[key] = value;
    }
  }

  users(users: User[]): VisitBuilder {
    this.visit.user = users;
    return this;
  }

  organizer(organizer: string): VisitBuilder {
    this.visit.organizer = organizer;
    return this;
  }

  build(): Visit {
    return this.visit;
  }
}
