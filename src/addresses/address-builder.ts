import { CreateAddressDto } from 'src/addresses/dto/create-address.dto';
import { User } from 'src/users/entities/user.entity';
import { Address } from './entities/address.entity';

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
