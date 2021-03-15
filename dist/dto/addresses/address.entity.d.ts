import { User } from 'src/dto/users/user.entity';
import { Organizer } from '../organizers/organizer.entity';
export declare class Address {
    id: string;
    street: string;
    building: string;
    apartment: string;
    postalCode: string;
    city: string;
    state: string;
    country: string;
    additionalInfo: string;
    user: User;
    organizers?: Organizer[];
}
