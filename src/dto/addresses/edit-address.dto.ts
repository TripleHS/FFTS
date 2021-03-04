import { ApiProperty } from '@nestjs/swagger';

export class EditAddressDto {
  @ApiProperty({
    type: Number,
    required: false,
  })
  readonly userId: number;
  @ApiProperty({
    type: String,
    required: false,
  })
  readonly street: string;
  @ApiProperty({
    type: String,
    required: false,
  })
  readonly building: string;
  @ApiProperty({
    type: String,
    required: false,
  })
  readonly apartment: string;
  @ApiProperty({
    type: String,
    required: false,
  })
  readonly postalCode: string;
  @ApiProperty({
    type: String,
    required: false,
  })
  readonly city: string;
  @ApiProperty({
    type: String,
    required: false,
  })
  readonly state: string;
  @ApiProperty({
    type: String,
    required: false,
  })
  readonly country: string;
  @ApiProperty({
    type: String,
    required: false,
  })
  readonly additionalInfo: string;
}