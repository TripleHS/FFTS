import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './dto/addresses/address.entity';
import { AddressesModule } from './addresses/addresses.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './dto/users/user.entity';
import { Visit } from './dto/visits/visit.entity';
import { UsersModule } from './users/users.module';
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
      entities: [User, Address, Visit],
      synchronize: true,
    }),
    UsersModule,
    AddressesModule,
    VisitsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
