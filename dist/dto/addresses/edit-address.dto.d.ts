import { CreateAddressDto } from './create-address.dto';
declare const EditAddressDto_base: import("@nestjs/common").Type<Omit<CreateAddressDto, "userId">>;
export declare class EditAddressDto extends EditAddressDto_base {
    organizerIds: string[];
}
export {};
