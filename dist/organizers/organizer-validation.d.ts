import * as Joi from 'joi';
import { CreateOrganizerDto } from 'src/dto/organizers/create-organizer.dto';
import { EditOrganizerDto } from 'src/dto/organizers/edit-organizer.dto';
export declare class OrganizerCreationValidation {
    private static schema;
    static validate(organizerDto: CreateOrganizerDto): Joi.ValidationResult;
}
export declare class OrganizerEditionValidation {
    private static schema;
    static validate(organizerDto: EditOrganizerDto): Joi.ValidationResult;
}
