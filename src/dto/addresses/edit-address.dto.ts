import { OmitType } from '@nestjs/swagger';
import { CreateAddressDto } from './create-address.dto';

export class EditAddressDto extends OmitType(CreateAddressDto, [
  'userId',
] as const) {
  organizerIds: string[];
}
