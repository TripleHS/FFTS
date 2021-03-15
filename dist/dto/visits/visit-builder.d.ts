import { Organizer } from '../organizers/organizer.entity';
import { User } from '../users/user.entity';
import { CreateVisitDto } from './create-visit.dto';
import { Visit } from './visit.entity';
export declare class VisitBuilder {
    private visit;
    constructor();
    visitDto(visitDto: CreateVisitDto): VisitBuilder;
    users(users: User[]): VisitBuilder;
    organizer(organizer: Organizer): VisitBuilder;
    build(): Visit;
}
