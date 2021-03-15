import * as Joi from 'joi';
import { CreateAddressDto } from 'src/dto/addresses/create-address.dto';
import { EditAddressDto } from 'src/dto/addresses/edit-address.dto';
export declare class AddressCreationValidation {
    private static schema;
    static validate(addressDto: CreateAddressDto): Joi.ValidationResult;
}
export declare class AddressEditionValidation {
    private static schema;
    static validate(addressDto: EditAddressDto): Joi.ValidationResult;
}
