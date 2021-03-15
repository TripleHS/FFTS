import { Phone } from './phone.entity';
declare const CreatePhoneDto_base: import("@nestjs/common").Type<Omit<Phone, "user">>;
export declare class CreatePhoneDto extends CreatePhoneDto_base {
    userId: string;
}
export {};
