import { CreateAddressDto } from 'src/dto/addresses/create-address.dto';
import { User } from 'src/dto/users/user.entity';
import { Address } from './address.entity';
export declare class AddressBuilder {
    private address;
    addressDto(addressDto: CreateAddressDto): AddressBuilder;
    user(user: User): AddressBuilder;
    build(): Address;
}
