import { Module } from '@nestjs/common';
import { SpecializationsService } from './specializations.service';
import { SpecializationsController } from './specializations.controller';
import { Specialization } from './entities/specialization.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Specialization])],
  controllers: [SpecializationsController],
  providers: [SpecializationsService],
})
export class SpecializationsModule {}
