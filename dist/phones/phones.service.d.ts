import { CreatePhoneDto } from 'src/dto/phones/create-phone.dto';
import { Phone } from 'src/dto/phones/phone.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
export declare class PhonesService {
    private phoneRepository;
    private usersService;
    constructor(phoneRepository: Repository<Phone>, usersService: UsersService);
    findAll(): Promise<Phone[]>;
    findOne(id: string): Promise<Phone>;
    findByUserId(userId: string): Promise<Phone[]>;
    create(phoneDto: CreatePhoneDto): Promise<Phone>;
    remove(id: string): Promise<void>;
}
