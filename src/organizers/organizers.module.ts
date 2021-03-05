import { Module } from '@nestjs/common';
import { OrganizersService } from './organizers.service';
import { OrganizersController } from './organizers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organizer } from 'src/dto/organizers/organizer.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Organizer]), UsersModule],
  providers: [OrganizersService],
  controllers: [OrganizersController],
})
export class OrganizersModule {}
