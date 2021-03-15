"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizerEditionValidation = exports.OrganizerCreationValidation = void 0;
const Joi = require("joi");
const create_organizer_dto_1 = require("../dto/organizers/create-organizer.dto");
const edit_organizer_dto_1 = require("../dto/organizers/edit-organizer.dto");
class OrganizerCreationValidation {
    static validate(organizerDto) {
        return this.schema.validate(organizerDto, { abortEarly: false });
    }
}
exports.OrganizerCreationValidation = OrganizerCreationValidation;
OrganizerCreationValidation.schema = Joi.object({
    title: Joi.string().trim().min(3).max(25).required(),
    userId: Joi.string()
        .trim()
        .required(),
    addressId: Joi.string().trim().uuid().required(),
});
class OrganizerEditionValidation {
    static validate(organizerDto) {
        return this.schema.validate(organizerDto, { abortEarly: false });
    }
}
exports.OrganizerEditionValidation = OrganizerEditionValidation;
OrganizerEditionValidation.schema = Joi.object({
    title: Joi.string().trim().alphanum().min(3).max(25),
    addressId: Joi.string().trim().uuid(),
});
//# sourceMappingURL=organizer-validation.js.map