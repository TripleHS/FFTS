import * as Joi from 'joi';
import { CreateVisitDto } from 'src/dto/visits/create-visit.dto';
import { EditVisitDto } from 'src/dto/visits/edit-visit.dto';
import { VisitType } from 'src/enums';

export class VisitCreationValidation {
  private static userIds = Joi.string()
    .uuid()
    .message(`Incorrect participant id format! UUID format is required!`);
  private static schema = Joi.object({
    date: Joi.date()
      .min('now')
      .required()
      .message(`Date is required and have to be in the future!`),
    duration: Joi.number()
      .min(15)
      .max(120)
      .required()
      .message(
        `Duration should be number in boundaries between 15 and 120 min!`,
      ),
    visitType: Joi.string()
      .max(15)
      .valid(Object.values(VisitType))
      .required()
      .message(
        `Visit type is required and have to be equal to ${Object.values(
          VisitType,
        )}!`,
      ),
    userIds: Joi.array()
      .items(VisitCreationValidation.userIds)
      .required()
      .message(`Participants are required!`),
    organizerId: Joi.string()
      .uuid()
      .required()
      .message(`Organizer id in UUID format is required!`),
  });

  static validate(visitDto: CreateVisitDto) {
    return this.schema.validate(visitDto);
  }
}

export class VisitEditionValidation {
  private static schema = Joi.object({
    date: Joi.date()
      .min('now')
      .required()
      .message(`Date is required and have to be in the future!`),
    duration: Joi.number()
      .min(15)
      .max(120)
      .required()
      .message(
        `Duration should be number in boundaries between 15 and 120 min!`,
      ),
    visitType: Joi.string()
      .max(15)
      .valid(Object.values(VisitType))
      .required()
      .message(
        `Visit type is required and have to be equal to ${Object.values(
          VisitType,
        )}!`,
      ),
  });

  static validate(visitDto: EditVisitDto) {
    return this.schema.validate(visitDto);
  }
}
