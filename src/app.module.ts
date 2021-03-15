import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './dto/addresses/address.entity';
import { AddressesModule } from './addresses/addresses.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './dto/users/user.entity';
import { UsersModule } from './users/users.module';
import { PhonesModule } from './phones/phones.module';
import { Phone } from './dto/phones/phone.entity';
import { Organizer } from './dto/organizers/organizer.entity';
import { OrganizersModule } from './organizers/organizers.module';
import { Visit } from './dto/visits/visit.entity';
import { VisitsModule } from './visits/visits.module';
import { SpecializationsModule } from './specializations/specializations.module';
import { Specialization } from './specializations/entities/specialization.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'remotemysql.com',
      port: 3306,
      username: 'TtEhSSiGPc',
      password: 'URLyXZVVER',
      database: 'TtEhSSiGPc',
      entities: [User, Address, Phone, Organizer, Visit, Specialization],
      synchronize: true,
    }),
    UsersModule,
    AddressesModule,
    PhonesModule,
    OrganizersModule,
    VisitsModule,
    SpecializationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
