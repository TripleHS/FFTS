import * as Joi from 'joi';
import { CreateOrganizerDto } from 'src/dto/organizers/create-organizer.dto';
import { EditOrganizerDto } from 'src/dto/organizers/edit-organizer.dto';

export class OrganizerCreationValidation {
  private static schema = Joi.object({
    title: Joi.string().trim().min(3).max(25).required(),
    userId: Joi.string()
      .trim()
      // .uuid()
      .required(),
    addressId: Joi.string().trim().uuid().required(),
  });

  static validate(organizerDto: CreateOrganizerDto) {
    return this.schema.validate(organizerDto, { abortEarly: false });
  }
}

export class OrganizerEditionValidation {
  private static schema = Joi.object({
    title: Joi.string().trim().alphanum().min(3).max(25),
    addressId: Joi.string().trim().uuid(),
  });

  static validate(organizerDto: EditOrganizerDto) {
    return this.schema.validate(organizerDto, { abortEarly: false });
  }
}
