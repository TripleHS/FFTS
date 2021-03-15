import { User } from 'src/dto/users/user.entity';
import { CreateVisitDto } from 'src/dto/visits/create-visit.dto';
import { EditVisitDto } from 'src/dto/visits/edit-visit.dto';
import { Visit } from 'src/dto/visits/visit.entity';
import { OrganizersService } from 'src/organizers/organizers.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
export declare class VisitsService {
    private visitsRepository;
    private usersService;
    private organizersService;
    constructor(visitsRepository: Repository<Visit>, usersService: UsersService, organizersService: OrganizersService);
    getAll(): Promise<Visit[]>;
    getOne(id: string): Promise<Visit>;
    getAllByOrganizerId(organizerId: string): Promise<Visit[]>;
    getAllByUserId(userId: string): Promise<Visit[]>;
    getAllParticipants(visitId: string): Promise<User[]>;
    create(visitDto: CreateVisitDto): Promise<Visit>;
    delete(id: string): Promise<void>;
    update(id: string, visitDto: EditVisitDto): Promise<void>;
    addUser(visitId: string, userId: string): Promise<void>;
    removeUser(visitId: string, userId: string): Promise<void>;
}
