import { User } from './user.entity';
declare const CreateUserDto_base: import("@nestjs/common").Type<Omit<User, "organizers" | "id" | "addresses" | "phones">>;
export declare class CreateUserDto extends CreateUserDto_base {
}
export {};
