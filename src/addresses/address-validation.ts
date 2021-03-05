import * as Joi from 'joi';
import { CreateAddressDto } from 'src/dto/addresses/create-address.dto';
import { EditAddressDto } from 'src/dto/addresses/edit-address.dto';

export class AddressCreationValidation {
  private static schema = Joi.object({
    street: Joi.string()
      .trim()
      .min(3)
      .max(50)
      .pattern(/^[\w\-]*$/)
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
      .pattern(/^[a-zA-Z\-\s]*$/)
      .required(),
    state: Joi.string().trim().alphanum().min(2).max(25).required(),
    country: Joi.string()
      .trim()
      .min(2)
      .max(50)
      .pattern(/^[a-zA-Z\-\s]*$/)
      .required(),
    additionalInfo: Joi.string()
      .trim()
      .max(1000)
      .pattern(/^[\w\s]*$/),
    userId: Joi.number().required(),
  });

  static validate(addressDto: CreateAddressDto) {
    return this.schema.validate(addressDto, { abortEarly: false });
  }
}

export class AddressEditionValidation {
  private static schema = Joi.object({
    street: Joi.string()
      .trim()
      .pattern(/^[\w\-]{3,50}$/),
    building: Joi.string().trim().alphanum().min(1).max(15),
    apartment: Joi.string().trim().alphanum().max(10),
    postalCode: Joi.string()
      .trim()
      .pattern(/^\d{5,6}$/),
    city: Joi.string()
      .trim()
      .pattern(/^[a-zA-Z\-\s]{2,50}$/),
    state: Joi.string().trim().alphanum().min(2).max(25),
    country: Joi.string()
      .trim()
      .pattern(/^[a-zA-Z\-\s]{2,50}$/),
    additionalInfo: Joi.string()
      .trim()
      .pattern(/^[\w\s]{,1000}$/),
  });

  static validate(addressDto: EditAddressDto) {
    return this.schema.validate(addressDto, { abortEarly: false });
  }
}
