import { CreateOrganizerDto } from 'src/dto/organizers/create-organizer.dto';
import { EditOrganizerDto } from 'src/dto/organizers/edit-organizer.dto';
import { OrganizersService } from './organizers.service';
export declare class OrganizersController {
    private readonly organizersService;
    constructor(organizersService: OrganizersService);
    getAll(): Promise<import("../dto/organizers/organizer.entity").Organizer[]>;
    getOne(id: string): Promise<import("../dto/organizers/organizer.entity").Organizer>;
    getAllByUserId(userId: string): Promise<import("../dto/organizers/organizer.entity").Organizer[]>;
    getAllOrganizersByAddressId(addressId: string): Promise<import("../dto/organizers/organizer.entity").Organizer[]>;
    create(organizerDto: CreateOrganizerDto): import("joi").ValidationError | Promise<import("../dto/organizers/organizer.entity").Organizer>;
    delete(id: string): Promise<void>;
    update(id: string, organizerDto: EditOrganizerDto): Promise<void> | import("joi").ValidationError;
}
