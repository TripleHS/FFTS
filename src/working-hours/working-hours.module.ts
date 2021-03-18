import { Module } from '@nestjs/common';
import { WorkingHoursService } from './working-hours.service';
import { WorkingHoursController } from './working-hours.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkingHours } from './entites/working-hours.entity';
import { OrganizersModule } from 'src/organizers/organizers.module';

@Module({
  imports: [TypeOrmModule.forFeature([WorkingHours]), OrganizersModule],
  providers: [WorkingHoursService],
  controllers: [WorkingHoursController],
  exports: [WorkingHoursService],
})
export class WorkingHoursModule {}
