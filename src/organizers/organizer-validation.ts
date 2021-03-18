import * as Joi from 'joi';
import { CreateOrganizerDto } from 'src/organizers/dto/create-organizer.dto';
import { EditOrganizerDto } from 'src/organizers/dto/edit-organizer.dto';

export class OrganizerCreationValidation {
  private static schema = Joi.object({
    title: Joi.string()
      .trim()
      .min(3)
      .max(25)
      .pattern(/^[a-zA-Z\s\-ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*$/)
      .required()
      .messages({
        'string.min': 'Title have to contain at least 3 characters.',
        'string.max': "Title can't be longer than 25 characters.",
        'string.pattern.base':
          'Title can contain only letters, white spaces, numbers and dashes.',
        'any.required': 'Title is required.',
      }),
    userId: Joi.string().trim().uuid().required().messages({
      'string.uuid': 'User id should be in UUID format.',
      'any.required': 'User id is required.',
    }),
    addressId: Joi.string().trim().uuid().required().messages({
      'string.uuid': 'Address id should be in UUID format.',
      'any.required': 'Address id is required.',
    }),
  });

  static validate(organizerDto: CreateOrganizerDto) {
    return this.schema.validate(organizerDto, { abortEarly: false });
  }
}

export class OrganizerEditionValidation {
  private static schema = Joi.object({
    title: Joi.string()
      .trim()
      .min(3)
      .max(25)
      .pattern(/^[a-zA-Z\s\-ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*$/)
      .messages({
        'string.min': 'Title have to contain at least 3 characters.',
        'string.max': "Title can't be longer than 25 characters.",
        'string.pattern.base':
          'Title can contain only letters, white spaces, numbers and dashes.',
      }),
    addressId: Joi.string().trim().uuid().messages({
      'string.uuid': 'Address id should be in UUID format.',
    }),
  });

  static validate(organizerDto: EditOrganizerDto) {
    return this.schema.validate(organizerDto, { abortEarly: false });
  }
}
