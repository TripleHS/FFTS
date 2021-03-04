import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateAddressDto {
  @ApiProperty()
  @IsNumber()
  readonly userId: number;
  @ApiProperty()
  @IsString()
  readonly street: string;
  @ApiProperty()
  @IsString()
  readonly building: string;
  @ApiProperty()
  @IsString()
  readonly apartment: string;
  @ApiProperty()
  @IsString()
  readonly postalCode: string;
  @ApiProperty()
  @IsString()
  readonly city: string;
  @ApiProperty()
  @IsString()
  readonly state: string;
  @ApiProperty()
  @IsString()
  readonly country: string;
  @ApiProperty()
  @IsString()
  readonly additionalInfo: string;
}
