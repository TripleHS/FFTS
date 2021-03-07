import { Module } from '@nestjs/common';
import { VisitsService } from './visits.service';
import { VisitsController } from './visits.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visit } from 'src/dto/visits/visit.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Visit]), UsersModule],
  providers: [VisitsService],
  controllers: [VisitsController],
  exports: [VisitsService],
})
export class VisitsModule {}
