import * as Joi from 'joi';
import { CreateVisitDto } from 'src/dto/visits/create-visit.dto';
import { EditVisitDto } from 'src/dto/visits/edit-visit.dto';
export declare class VisitCreationValidation {
    private static userIds;
    private static schema;
    static validate(visitDto: CreateVisitDto): Joi.ValidationResult;
}
export declare class VisitEditionValidation {
    private static schema;
    static validate(visitDto: EditVisitDto): Joi.ValidationResult;
}
