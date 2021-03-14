import { Module } from '@nestjs/common';
import { WorkingHoursService } from './working-hours.service';
import { WorkingHoursController } from './working-hours.controller';

@Module({
  providers: [WorkingHoursService],
  controllers: [WorkingHoursController],
})
export class WorkingHoursModule {}
