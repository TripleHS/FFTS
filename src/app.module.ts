import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './dto/addresses/address.entity';
import { AddressesModule } from './addresses/addresses.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './dto/users/user.entity';
import { UsersModule } from './users/users.module';
import { Organizer } from './dto/organizers/organizer.entity';
import { OrganizersModule } from './organizers/organizers.module';
import { Visit } from './dto/visits/visit.entity';
import { VisitsModule } from './visits/visits.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'password',
      database: 'ffts',
      entities: [User, Address, Organizer, Visit],
      synchronize: true,
    }),
    UsersModule,
    AddressesModule,
    OrganizersModule,
    VisitsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
