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

  user(user: User): VisitBuilder {
    this.visit.user = user;
    return this;
  }

  organizer(organizer: number): VisitBuilder {
    this.visit.organizer = organizer;
    return this;
  }

  build(): Visit {
    return this.visit;
  }
}
