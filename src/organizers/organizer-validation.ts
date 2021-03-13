import * as Joi from 'joi';
import { CreateOrganizerDto } from 'src/dto/organizers/create-organizer.dto';
import { EditOrganizerDto } from 'src/dto/organizers/edit-organizer.dto';

export class OrganizerCreationValidation {
  private static schema = Joi.object({
    title: Joi.string()
      .trim()
      .alphanum()
      .min(3)
      .max(25)
      .required()
      .message(`Title is required and have to containt 3 to 25 characters!`),
    userId: Joi.string()
      .trim()
      .uuid()
      .required()
      .message(`User id in UUID format is required!`),
    addressId: Joi.string()
      .trim()
      .uuid()
      .required()
      .message(`Address id in UUID format is required!`),
  });

  static validate(organizerDto: CreateOrganizerDto) {
    return this.schema.validate(organizerDto, { abortEarly: false });
  }
}

export class OrganizerEditionValidation {
  private static schema = Joi.object({
    title: Joi.string()
      .trim()
      .alphanum()
      .min(3)
      .max(25)
      .message(`Title have to containt 3 to 25 characters!`),
    addressId: Joi.string()
      .trim()
      .uuid()
      .message(`Address id is in incorrect format! Required UUID format!`),
  });

  static validate(organizerDto: EditOrganizerDto) {
    return this.schema.validate(organizerDto, { abortEarly: false });
  }
}
