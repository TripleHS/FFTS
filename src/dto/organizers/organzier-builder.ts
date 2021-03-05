import { CreateOrganizer } from './create-organizer.dto';
import { Organizer } from './organizer.entity';
import { User } from '../users/user.entity';

export class OrganizerBuilder {
  private organizer: Organizer;

  constructor() {
    this.organizer = new Organizer();
  }

  organizerDto(organizerDto: CreateOrganizer): OrganizerBuilder {
    this.organizer.address = organizerDto.address;
    this.organizer.title = organizerDto.title;
    return this;
  }

  user(user: User): OrganizerBuilder {
    this.organizer.user = user;
    return this;
  }

  build(): Organizer {
    return this.organizer;
  }
}
