import { CreateOrganizerDto } from './create-organizer.dto';
import { Organizer } from './organizer.entity';
import { User } from '../users/user.entity';
import { Address } from '../addresses/address.entity';

export class OrganizerBuilder {
  private organizer: Organizer;

  constructor() {
    this.organizer = new Organizer();
  }

  organizerDto(organizerDto: CreateOrganizerDto): OrganizerBuilder {
    this.organizer.title = organizerDto.title;
    return this;
  }

  user(user: User): OrganizerBuilder {
    this.organizer.user = user;
    return this;
  }

  address(address: Address): OrganizerBuilder {
    this.organizer.address = address;
    return this;
  }

  build(): Organizer {
    return this.organizer;
  }
}
