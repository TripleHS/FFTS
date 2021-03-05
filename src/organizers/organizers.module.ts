import { Module } from '@nestjs/common';
import { OrganizersService } from './organizers.service';
import { OrganizersController } from './organizers.controller';

@Module({
  providers: [OrganizersService],
  controllers: [OrganizersController],
})
export class OrganizersModule {}
