import { CreateAddressDto } from 'src/dto/addresses/create-address.dto';
import { EditAddressDto } from 'src/dto/addresses/edit-address.dto';
import { AddressesService } from './addresses.service';
export declare class AddressesController {
    private readonly addressesService;
    constructor(addressesService: AddressesService);
    getAllUsers(): Promise<import("../dto/addresses/address.entity").Address[]>;
    getAddressById(id: string): Promise<import("../dto/addresses/address.entity").Address>;
    getAddressesByUserId(id: string): Promise<import("../dto/addresses/address.entity").Address[]>;
    addAddress(addressDto: CreateAddressDto): import("joi").ValidationError | Promise<import("../dto/addresses/address.entity").Address>;
    deleteAddress(id: string): Promise<void>;
    editFields(id: string, addressDto: EditAddressDto): Promise<void> | import("joi").ValidationError;
}
