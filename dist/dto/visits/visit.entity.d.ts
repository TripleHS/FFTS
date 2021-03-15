import { VisitType } from 'src/enums';
import { Organizer } from '../organizers/organizer.entity';
import { User } from '../users/user.entity';
export declare class Visit {
    id: string;
    date: Date;
    duration: number;
    visitType: VisitType;
    users: User[];
    organizer: Organizer;
}
