"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressEditionValidation = exports.AddressCreationValidation = void 0;
const Joi = require("joi");
const create_address_dto_1 = require("../dto/addresses/create-address.dto");
const edit_address_dto_1 = require("../dto/addresses/edit-address.dto");
class AddressCreationValidation {
    static validate(addressDto) {
        return this.schema.validate(addressDto, { abortEarly: false });
    }
}
exports.AddressCreationValidation = AddressCreationValidation;
AddressCreationValidation.schema = Joi.object({
    street: Joi.string()
        .trim()
        .min(3)
        .max(50)
        .pattern(/^[\w\-\sąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*$/)
        .required(),
    building: Joi.string().trim().alphanum().min(1).max(15).required(),
    apartment: Joi.string().trim().alphanum().max(10),
    postalCode: Joi.string()
        .trim()
        .min(5)
        .max(6)
        .pattern(/^[\d\-]*$/)
        .required(),
    city: Joi.string()
        .trim()
        .min(2)
        .max(50)
        .pattern(/^[a-zA-Z\-\sąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*$/)
        .required(),
    state: Joi.string().trim().alphanum().min(2).max(25).required(),
    country: Joi.string()
        .trim()
        .min(2)
        .max(50)
        .pattern(/^[a-zA-Z\-\sąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*$/)
        .required(),
    additionalInfo: Joi.string()
        .trim()
        .max(1000)
        .pattern(/^[\w\sąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*$/),
    userId: Joi.string().uuid().required(),
});
class AddressEditionValidation {
    static validate(addressDto) {
        return this.schema.validate(addressDto, { abortEarly: false });
    }
}
exports.AddressEditionValidation = AddressEditionValidation;
AddressEditionValidation.schema = Joi.object({
    street: Joi.string()
        .trim()
        .pattern(/^[\w\-\sąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{3,50}$/),
    building: Joi.string().trim().alphanum().min(1).max(15),
    apartment: Joi.string().trim().alphanum().max(10),
    postalCode: Joi.string()
        .trim()
        .pattern(/^\d{5,6}$/),
    city: Joi.string()
        .trim()
        .pattern(/^[a-zA-Z\-\sąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{2,50}$/),
    state: Joi.string().trim().alphanum().min(2).max(25),
    country: Joi.string()
        .trim()
        .pattern(/^[a-zA-Z\-\sąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{2,50}$/),
    additionalInfo: Joi.string()
        .trim()
        .pattern(/^[\w\sąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{,1000}$/),
});
//# sourceMappingURL=address-validation.js.map