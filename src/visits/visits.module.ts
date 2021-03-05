import { Module } from '@nestjs/common';
import { VisitsService } from './visits.service';
import { VisitsController } from './visits.controller';

@Module({
  providers: [VisitsService],
  controllers: [VisitsController]
})
export class VisitsModule {}
