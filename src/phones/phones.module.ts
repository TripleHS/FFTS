import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phone } from 'src/phones/entities/phone.entity';
import { UsersModule } from 'src/users/users.module';
import { PhonesController } from './phones.controller';
import { PhonesService } from './phones.service';

@Module({
  imports: [TypeOrmModule.forFeature([Phone]), UsersModule],
  controllers: [PhonesController],
  providers: [PhonesService],
})
export class PhonesModule {}
