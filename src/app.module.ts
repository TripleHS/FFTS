import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './addresses/entities/address.entity';
import { AddressesModule } from './addresses/addresses.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { WorkingHours } from './working-hours/entities/working-hours.entity';
import { UsersModule } from './users/users.module';
import { PhonesModule } from './phones/phones.module';
import { Phone } from './phones/entities/phone.entity';
import { Organizer } from './organizers/entities/organizer.entity';
import { OrganizersModule } from './organizers/organizers.module';
import { Visit } from './visits/entities/visit.entity';
import { VisitsModule } from './visits/visits.module';
import { WorkingHoursModule } from './working-hours/working-hours.module';
import { SpecializationsModule } from './specializations/specializations.module';
import { Specialization } from './specializations/entities/specialization.entity';
import { AuthModule } from './auth/auth.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [
        User,
        Address,
        Phone,
        Organizer,
        Visit,
        Specialization,
        WorkingHours,
      ],
      synchronize: true,
      ssl: true,
    }),
    UsersModule,
    AddressesModule,
    PhonesModule,
    OrganizersModule,
    WorkingHoursModule,
    VisitsModule,
    SpecializationsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
