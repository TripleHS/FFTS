import * as Joi from 'joi';
import { CreateWorkingHoursDto } from './dto/create-working-hours.dto';
import { EditWorkingHoursDto } from './dto/edit-working-hours.dto';

export class WorkingHoursCreationValidation {
  private static readonly schema = Joi.object({
    organizerId: Joi.string().trim().uuid().required().messages({
      'string.guid': 'Organizer id have to be in UUID format.',
      'any.required': 'Organizer id is required.',
    }),
    date: Joi.date().required().messages({
      'any.required': 'Date is required.',
    }),
    shiftEndDate: Joi.date().greater(Joi.ref('date')).messages({
      'date.greater': 'Shift end cannot be before start date.',
    }),
    startHour: Joi.string()
      .pattern(/^([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)
      .required()
      .messages({
        'string.pattern.base':
          'Working hours for begin must be in pattern: HH:MM:SS.',
        'any.required': 'Work start hour is required',
      }),
    endHour: Joi.string()
      .pattern(/^([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)
      .required()
      .messages({
        'string.pattern.base':
          'Working hours for end must be in pattern: HH:MM:SS.',
        'any.required': 'Work end hour is required',
      }),
    lunchTime: Joi.string()
      .pattern(/^([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)
      .messages({
        'string.pattern.base':
          'Working hours for end must be in pattern: HH:MM:SS.',
      }),
    lunchDuration: Joi.number().min(15).max(60).messages({
      'number.min': 'Lunch break have to be at least 15 min long.',
      'number.max': 'Lunch break cannot be longer than 60 min.',
    }),
  });

  static validate(workingHoursDto: CreateWorkingHoursDto) {
    return this.schema.validate(workingHoursDto, { abortEarly: false });
  }
}

export class WorkingHoursEditionValidation {
  private static readonly schema = Joi.object({
    date: Joi.date(),
    shiftEndDate: Joi.date().greater(Joi.ref('date')).messages({
      'date.greater': 'Shift end cannot be before start date.',
    }),
    startHour: Joi.date()
      .min(Joi.ref('date'))
      .messages({
        'date.min': `Working hours cannot start before ${Joi.ref('date')}`,
      }),
    endHour: Joi.date().greater(Joi.ref('startHour')).messages({
      'date.greater': 'Work end hour have to be after start hour.',
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

  static validate(workingHoursDto: EditWorkingHoursDto) {
    return this.schema.validate(workingHoursDto, { abortEarly: false });
  }
}
