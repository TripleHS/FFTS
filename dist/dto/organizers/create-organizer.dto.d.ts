import { Organizer } from './organizer.entity';
declare const CreateOrganizerDto_base: import("@nestjs/common").Type<Omit<Organizer, "id" | "user" | "address" | "visits">>;
export declare class CreateOrganizerDto extends CreateOrganizerDto_base {
    userId: string;
    addressId: string;
}
export {};
