import { CreateVisitDto } from 'src/dto/visits/create-visit.dto';
import { EditVisitDto } from 'src/dto/visits/edit-visit.dto';
import { VisitsService } from './visits.service';
export declare class VisitsController {
    private visitsService;
    constructor(visitsService: VisitsService);
    getAll(): Promise<import("../dto/visits/visit.entity").Visit[]>;
    getOne(id: string): Promise<import("../dto/visits/visit.entity").Visit>;
    getAllByUserId(userId: string): Promise<import("../dto/visits/visit.entity").Visit[]>;
    getAllByOrganizerId(organizerId: string): Promise<import("../dto/visits/visit.entity").Visit[]>;
    getAllUsersFromVisit(visitId: string): Promise<import("../dto/users/user.entity").User[]>;
    createNewVisit(visitDto: CreateVisitDto): import("joi").ValidationError | Promise<import("../dto/visits/visit.entity").Visit>;
    addUserToVisit(visitId: string, userId: string): Promise<void>;
    removeUserFromVisit(visitId: string, userId: string): Promise<void>;
    removeVisit(visitId: string): Promise<void>;
    updateVisit(visitId: string, visitDto: EditVisitDto): Promise<void> | import("joi").ValidationError;
}
