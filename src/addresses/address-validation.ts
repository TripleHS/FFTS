import * as Joi from 'joi';
import { CreateAddressDto } from 'src/addresses/dto/create-address.dto';
import { EditAddressDto } from 'src/addresses/dto/edit-address.dto';

export class AddressCreationValidation {
  private static schema = Joi.object({
    street: Joi.string()
      .trim()
      .min(3)
      .max(50)
      .pattern(/^[\w\-\sąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*$/)
      .required()
      .messages({
        'string.min': 'Street should contain at least 3 characters.',
        'string.max': "Street can't be longer than 50 characters.",
        'string.pattern.base':
          'Street can containt numbers, letters, dash and white spaces.',
        'any.required': 'Street is required.',
      }),
    building: Joi.string()
      .trim()
      .alphanum()
      .min(1)
      .max(15)
      .required()
      .messages({
        'string.min': 'Building should contain at least 1 character.',
        'string.max': "Building can't be longer than 15 characters.",
        'string.alphanum': 'Building can containt letters and numbers.',
        'any.required': 'Building is required.',
      }),
    apartment: Joi.string().trim().alphanum().max(10).messages({
      'string.max': "Apartment can't be longer than 10 characters.",
      'string.alphanum': 'Postal code can containt numbers and dash.',
    }),
    postalCode: Joi.string()
      .trim()
      .min(5)
      .max(6)
      .pattern(/^[\d\-]*$/)
      .required()
      .messages({
        'string.min': 'Postal code should contain at least 5 characters.',
        'string.max': "Postal code can't be longer than 6 characters.",
        'string.pattern.base': 'Postal code can containt numbers and dash.',
        'any.required': 'Postal code is required.',
      }),
    city: Joi.string()
      .trim()
      .min(2)
      .max(50)
      .pattern(/^[a-zA-Z\-\sąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*$/)
      .required()
      .messages({
        'string.min': 'City should contain at least 2 character.',
        'string.max': "City can't be longer than 50 characters.",
        'string.pattern.base':
          'City can containt letters, white spaces and dashes.',
        'any.required': 'City is required.',
      }),
    state: Joi.string().trim().alphanum().min(2).max(25).required().messages({
      'string.min': 'State should contain at least 2 character.',
      'string.max': "State can't be longer than 25 characters.",
      'string.alphanum': 'State can containt letters and numbers.',
      'any.required': 'State is required.',
    }),
    country: Joi.string()
      .trim()
      .min(2)
      .max(50)
      .pattern(/^[a-zA-Z\-\sąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*$/)
      .required()
      .messages({
        'string.min': 'Country should contain at least 2 character.',
        'string.max': "Country can't be longer than 50 characters.",
        'string.pattern.base':
          'Country can containt letters, white spaces and dashes.',
        'any.required': 'Country is required.',
      }),
    additionalInfo: Joi.string()
      .trim()
      .max(1000)
      .pattern(/^[\w\sąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*$/)
      .messages({
        'string.max': "Additional info can't be longer than 1000 characters.",
        'string.pattern.base':
          'Additional info can containt letters and white spaces.',
      }),
    userId: Joi.string().trim().uuid().required().messages({
      'string.guid': 'User id should be in UUID format.',
      'any.required': 'City is required.',
    }),
  });

  static validate(addressDto: CreateAddressDto) {
    return this.schema.validate(addressDto, { abortEarly: false });
  }
}

export class AddressEditionValidation {
  private static schema = Joi.object({
    street: Joi.string()
      .trim()
      .min(3)
      .max(50)
      .pattern(/^[\w\-\sąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*$/)
      .messages({
        'string.min': 'Street should contain at least 3 characters.',
        'string.max': "Street can't be longer than 50 characters.",
        'string.pattern.base':
          'Street can containt numbers, letters, dash and white spaces.',
      }),
    building: Joi.string().trim().alphanum().min(1).max(15).messages({
      'string.min': 'Building should contain at least 1 character.',
      'string.max': "Building can't be longer than 15 characters.",
      'string.alphanum': 'Building can containt letters and numbers.',
    }),
    apartment: Joi.string().trim().alphanum().max(10).messages({
      'string.max': "Apartment can't be longer than 10 characters.",
      'string.alphanum': 'Postal code can containt numbers and dash.',
    }),
    postalCode: Joi.string().trim().min(5).max(6).pattern(/^\d*$/).messages({
      'string.min': 'Postal code should contain at least 5 characters.',
      'string.max': "Postal code can't be longer than 6 characters.",
      'string.pattern.base': 'Postal code can containt numbers and dash.',
    }),
    city: Joi.string()
      .trim()
      .min(2)
      .max(50)
      .pattern(/^[a-zA-Z\-\sąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*$/)
      .messages({
        'string.min': 'City should contain at least 2 character.',
        'string.max': "City can't be longer than 50 characters.",
        'string.pattern.base':
          'City can containt letters, white spaces and dashes.',
      }),
    state: Joi.string().trim().alphanum().min(2).max(25).messages({
      'string.min': 'State should contain at least 2 character.',
      'string.max': "State can't be longer than 25 characters.",
      'string.alphanum': 'State can containt letters and numbers.',
    }),
    country: Joi.string()
      .trim()
      .min(2)
      .max(50)
      .pattern(/^[a-zA-Z\-\sąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*$/)
      .messages({
        'string.min': 'Country should contain at least 2 character.',
        'string.max': "Country can't be longer than 50 characters.",
        'string.pattern.base':
          'Country can containt letters, white spaces and dashes.',
        'any.required': 'Country is required.',
      }),
    additionalInfo: Joi.string()
      .trim()
      .max(1000)
      .pattern(/^[\w\sąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*$/)
      .messages({
        'string.max': "Additional info can't be longer than 1000 characters.",
        'string.pattern.base':
          'Additional info can containt letters and white spaces.',
      }),
  });

  static validate(addressDto: EditAddressDto) {
    return this.schema.validate(addressDto, { abortEarly: false });
  }
}
