import { Module } from '@nestjs/common';
import { OrganizersService } from './organizers.service';
import { OrganizersController } from './organizers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organizer } from 'src/dto/organizers/organizer.entity';
import { UsersModule } from 'src/users/users.module';
import { AddressesModule } from 'src/addresses/addresses.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Organizer]),
    UsersModule,
    AddressesModule,
  ],
  providers: [OrganizersService],
  controllers: [OrganizersController],
  exports: [OrganizersService],
})
export class OrganizersModule {}
