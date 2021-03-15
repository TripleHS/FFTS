import { Address } from 'src/dto/addresses/address.entity';
import { UserRole } from 'src/enums';
import { Visit } from '../visits/visit.entity';
import { Phone } from '../phones/phone.entity';
import { Organizer } from '../organizers/organizer.entity';
export declare class User {
    id: string;
    firstName?: string;
    lastName?: string;
    username: string;
    userPassword: string;
    email: string;
    userRole: UserRole;
    description?: string;
    addresses?: Address[];
    organizers?: Organizer[];
    phones: Phone[];
    visits?: Visit[];
}
