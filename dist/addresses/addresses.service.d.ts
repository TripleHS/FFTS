import { CreateAddressDto } from 'src/dto/addresses/create-address.dto';
import { EditAddressDto } from 'src/dto/addresses/edit-address.dto';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { Address } from '../dto/addresses/address.entity';
export declare class AddressesService {
    private addressesRepository;
    private usersService;
    constructor(addressesRepository: Repository<Address>, usersService: UsersService);
    findAll(): Promise<Address[]>;
    findOne(id: string): Promise<Address>;
    findByUserId(userId: string): Promise<Address[]>;
    create(addressDto: CreateAddressDto): Promise<Address>;
    remove(id: string): Promise<void>;
    edit(id: string, addressDto: EditAddressDto): Promise<void>;
}
