import { CreateVisitDto } from './create-visit.dto';
declare const EditVisitDto_base: import("@nestjs/common").Type<Omit<CreateVisitDto, "organizerId" | "userIds">>;
export declare class EditVisitDto extends EditVisitDto_base {
}
export {};
