import { CreateAddressDto } from 'src/dto/addresses/create-address.dto';
import { User } from 'src/dto/users/user.entity';
import { Address } from './address.entity';

export class AddressBuilder {
  private address: Address;

  addressDto(addressDto: CreateAddressDto): AddressBuilder {
    this.address = new Address();
    Object.entries(addressDto)
      .filter(([key]) => key !== 'userId' && key !== 'addressId')
      .forEach(([key, value]) => (this.address[key] = value.trim()));
    return this;
  }

  user(user: User): AddressBuilder {
    this.address.user = user;
    return this;
  }

  build(): Address {
    return this.address;
  }
}
