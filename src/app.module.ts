import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './dto/addresses/address.entity';
import { AddressesModule } from './addresses/addresses.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './dto/users/user.entity';
import { WorkingHours } from './dto/working-hours/working-hours.entity';
import { UsersModule } from './users/users.module';
import { OrganizersModule } from './organizers/organizers.module';
import { Organizer } from './dto/organizers/organizer.entity';
import { WorkingHoursModule } from './working-hours/working-hours.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'password',
      database: 'ffts',
      entities: [User, Address, Organizer, WorkingHours],
      synchronize: true,
    }),
    UsersModule,
    AddressesModule,
    OrganizersModule,
    WorkingHoursModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
