"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitEditionValidation = exports.VisitCreationValidation = void 0;
const Joi = require("joi");
const create_visit_dto_1 = require("../dto/visits/create-visit.dto");
const edit_visit_dto_1 = require("../dto/visits/edit-visit.dto");
const enums_1 = require("../enums");
class VisitCreationValidation {
    static validate(visitDto) {
        return this.schema.validate(visitDto);
    }
}
exports.VisitCreationValidation = VisitCreationValidation;
VisitCreationValidation.userIds = Joi.string();
VisitCreationValidation.schema = Joi.object({
    date: Joi.date().min('now'),
    duration: Joi.number().min(15).max(120).required(),
    visitType: Joi.string()
        .max(15)
        .valid(...Object.values(enums_1.VisitType))
        .required(),
    userIds: Joi.array().items(VisitCreationValidation.userIds).required(),
    organizerId: Joi.string().uuid().required(),
});
class VisitEditionValidation {
    static validate(visitDto) {
        return this.schema.validate(visitDto);
    }
}
exports.VisitEditionValidation = VisitEditionValidation;
VisitEditionValidation.schema = Joi.object({
    date: Joi.date().min('now'),
    duration: Joi.number().min(15).max(120),
    visitType: Joi.string()
        .max(15)
        .valid(...Object.values(enums_1.VisitType)),
});
//# sourceMappingURL=visit-validation.js.map