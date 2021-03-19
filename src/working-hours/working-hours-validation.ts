import * as Joi from 'joi';
import { CreateWorkingHoursDto } from './dto/create-working-hours.dto';

export class WorkingHoursCreationValidation {
  private static readonly schema = Joi.object({
    organizerId: Joi.string().trim().uuid().required().messages({
      'string.guid': 'Organizer id have to be in UUID format.',
      'any.required': 'Organizer id is required.',
    }),
    date: Joi.date().required().messages({
      'any.required': 'Date is required.',
    }),
    startHour: Joi.date()
      .min(Joi.ref('date'))
      .required()
      .messages({
        'date.min': `Working hours cannot start before ${Joi.ref('date')}`,
        'any.required': 'Work start hour is required',
      }),
    endHour: Joi.date().greater(Joi.ref('startHour')).required().messages({
      'date.greater': 'Work end hour have to be after start hour.',
      'any.required': 'Work end hour is required',
    }),
    lunchTime: Joi.date()
      .min(Joi.ref('date'))
      .greater(Joi.ref('startHour'))
      .less(Joi.ref('endHour'))
      .messages({
        'date.min': `Lunch break cannot occur before ${Joi.ref('date')}.`,
        'date.greater': `Lunch break cannot start before working hours.`,
        'date.less': `Lunch break cannot start after working hours.`,
      }),
    lunchDuration: Joi.number().min(15).max(60).messages({
      'number.min': 'Lunch break have to be at least 15 min long.',
      'number.max': 'Lunch break cannot be longer than 60 min.',
    }),
  });

  static validate(workingHoursDto: CreateWorkingHoursDto) {
    this.schema.validate(workingHoursDto, { abortEarly: false });
  }
}
