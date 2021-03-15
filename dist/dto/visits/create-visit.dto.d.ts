import { Visit } from './visit.entity';
declare const CreateVisitDto_base: import("@nestjs/common").Type<Omit<Visit, "id" | "organizer" | "users">>;
export declare class CreateVisitDto extends CreateVisitDto_base {
    organizerId: string;
    userIds: string[];
}
export {};
