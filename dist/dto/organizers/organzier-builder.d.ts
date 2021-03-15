import { CreateOrganizerDto } from './create-organizer.dto';
import { Organizer } from './organizer.entity';
import { User } from '../users/user.entity';
import { Address } from '../addresses/address.entity';
export declare class OrganizerBuilder {
    private organizer;
    constructor();
    organizerDto(organizerDto: CreateOrganizerDto): OrganizerBuilder;
    user(user: User): OrganizerBuilder;
    address(address: Address): OrganizerBuilder;
    build(): Organizer;
}
