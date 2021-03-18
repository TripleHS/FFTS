import * as Joi from 'joi';
import { CreateVisitDto } from 'src/visits/dto/create-visit.dto';
import { EditVisitDto } from 'src/visits/dto/edit-visit.dto';
import { VisitType } from 'src/enums';

export class VisitCreationValidation {
  private static userIds = Joi.string().uuid();
  private static schema = Joi.object({
    date: Joi.date().min('now'),
    duration: Joi.number().min(15).max(120).required(),
    visitType: Joi.string()
      .max(15)
      .valid(...Object.values(VisitType))
      .required(),
    userIds: Joi.array().items(VisitCreationValidation.userIds).required(),
    organizerId: Joi.string().uuid().required(),
  });

  static validate(visitDto: CreateVisitDto) {
    return this.schema.validate(visitDto);
  }
}

export class VisitEditionValidation {
  private static schema = Joi.object({
    date: Joi.date().min('now'),
    duration: Joi.number().min(15).max(120),
    visitType: Joi.string()
      .max(15)
      .valid(...Object.values(VisitType)),
  });

  static validate(visitDto: EditVisitDto) {
    return this.schema.validate(visitDto);
  }
}
