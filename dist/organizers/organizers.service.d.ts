import { AddressesService } from 'src/addresses/addresses.service';
import { CreateOrganizerDto } from 'src/dto/organizers/create-organizer.dto';
import { EditOrganizerDto } from 'src/dto/organizers/edit-organizer.dto';
import { Organizer } from 'src/dto/organizers/organizer.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
export declare class OrganizersService {
    private organizersRepository;
    private usersService;
    private addressesService;
    constructor(organizersRepository: Repository<Organizer>, usersService: UsersService, addressesService: AddressesService);
    getAll(): Promise<Organizer[]>;
    getOne(id: string): Promise<Organizer>;
    getAllByUserId(userId: string): Promise<Organizer[]>;
    getAllByAddressId(addressId: string): Promise<Organizer[]>;
    create(organizerDto: CreateOrganizerDto): Promise<Organizer>;
    private addressRegistered;
    delete(id: string): Promise<void>;
    edit(id: string, organizerDto: EditOrganizerDto): Promise<void>;
    private changeAddress;
}
