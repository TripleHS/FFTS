import { CreateAddressDto } from "src/dto/addresses/create-address.dto";
import { User } from "src/users/user.entity";
import { Address } from "./address.entity";

export class AddressBuilder {
  private address: Address;

  addressDto(addressDto: CreateAddressDto): AddressBuilder {
    this.address = new Address();
    this.address.street = addressDto.street;
    this.address.building = addressDto.building;
    this.address.apartment = addressDto.apartment;
    this.address.postalCode = addressDto.postalCode;
    this.address.city = addressDto.city;
    this.address.state = addressDto.state;
    this.address.country = addressDto.country;
    this.address.additionalInfo = addressDto.additionalInfo;
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