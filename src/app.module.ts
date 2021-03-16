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
      name: 'ffts',
      type: 'postgres',
      host: 'ec2-54-155-35-88.eu-west-1.compute.amazonaws.com',
      port: 5432,
      username: 'tuoqbrkotjtfgm',
      password:
        'fa5a7c7a2183527e1384d14b1b5853b3e313ebf065329486e43d75e3b25ae449',
      database: 'd3e43odpu1ht8q',
      synchronize: true,
      logging: false,
      entities: [User, Address, Phone, Organizer, Visit, Specialization],
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
