import { CreateUserDto } from 'src/dto/users/create-user.dto';
import { User } from 'src/dto/users/user.entity';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<User[]>;
    getUserById(id: string): Promise<User>;
    addUser(createUserDto: CreateUserDto): Promise<User>;
    removeUserById(id: string): Promise<void>;
}
