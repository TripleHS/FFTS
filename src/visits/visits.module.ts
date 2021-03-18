import { Module } from '@nestjs/common';
import { VisitsService } from './visits.service';
import { VisitsController } from './visits.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visit } from 'src/visits/entities/visit.entity';
import { UsersModule } from 'src/users/users.module';
import { OrganizersModule } from 'src/organizers/organizers.module';

@Module({
  imports: [TypeOrmModule.forFeature([Visit]), UsersModule, OrganizersModule],
  providers: [VisitsService],
  controllers: [VisitsController],
  exports: [VisitsService],
})
export class VisitsModule {}
