import * as Joi from 'joi';
import { CreateVisitDto } from 'src/visits/dto/create-visit.dto';
import { EditVisitDto } from 'src/visits/dto/edit-visit.dto';
import { VisitType } from 'src/enums';

export class VisitCreationValidation {
  private static userIds = Joi.string()
    .uuid()
    .messages({ 'string.guid': 'User id have to be in UUID format.' });
  private static schema = Joi.object({
    date: Joi.date().min('now').required().messages({
      'date.min': 'Date cannot be in past.',
      'any.required': 'Date is required.',
    }),
    duration: Joi.number().min(15).max(120).required().messages({
      'number.min': 'Duration cannot be shorter than 15 min.',
      'number.max': 'Duration connot be longer than 120 min.',
      'any.required': 'Duration is required.',
    }),
    visitType: Joi.string()
      .max(15)
      .valid(...Object.values(VisitType))
      .required()
      .messages({
        'string.min': 'Visit type is too long.',
        'any.only': `Visit type can be only: ${Object.values(VisitType)}.`,
        'any.required': 'Visit type is required.',
      }),
    userIds: Joi.array()
      .min(1)
      .items(VisitCreationValidation.userIds)
      .required()
      .messages({
        'array.min': 'There need to be at least one participant',
        'any.required': 'Participant array is required.',
      }),
    organizerId: Joi.string().uuid().required().messages({
      'string.guid': 'Organizer id have to be in UUID format.',
      'any.required': 'Organizer id is required.',
    }),
  });

  static validate(visitDto: CreateVisitDto) {
    return this.schema.validate(visitDto, { abortEarly: false });
  }
}

export class VisitEditionValidation {
  private static schema = Joi.object({
    date: Joi.date().min('now').messages({
      'date.min': 'Date cannot be in past.',
    }),
    duration: Joi.number().min(15).max(120).messages({
      'number.min': 'Duration cannot be shorter than 15 min.',
      'number.max': 'Duration connot be longer than 120 min.',
    }),
    visitType: Joi.string()
      .max(15)
      .valid(...Object.values(VisitType))
      .messages({
        'string.min': 'Visit type is too long.',
      }),
  });

  static validate(visitDto: EditVisitDto) {
    return this.schema.validate(visitDto, { abortEarly: false });
  }
}
