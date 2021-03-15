import { Address } from './address.entity';
declare const CreateAddressDto_base: import("@nestjs/common").Type<Omit<Address, "organizers" | "id" | "user">>;
export declare class CreateAddressDto extends CreateAddressDto_base {
    userId: string;
}
export {};
