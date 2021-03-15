import { Address } from '../addresses/address.entity';
import { User } from '../users/user.entity';
import { Visit } from '../visits/visit.entity';
export declare class Organizer {
    id: string;
    title: string;
    user: User;
    address: Address;
    visits: Visit[];
}
