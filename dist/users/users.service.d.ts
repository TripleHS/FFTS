import { CreateUserDto } from 'src/dto/users/create-user.dto';
import { User } from 'src/dto/users/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findAllById(userIds: string[]): Promise<User[]>;
    findOne(id: string): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<User>;
    remove(id: string): Promise<void>;
}
