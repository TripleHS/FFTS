import { PhoneType } from 'src/enums';
import { User } from '../users/user.entity';
export declare class Phone {
    phoneNumber: string;
    user: User;
    phoneType: PhoneType;
}
