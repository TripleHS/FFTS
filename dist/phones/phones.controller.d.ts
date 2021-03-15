import { CreatePhoneDto } from 'src/dto/phones/create-phone.dto';
import { PhonesService } from './phones.service';
export declare class PhonesController {
    private readonly phonesService;
    constructor(phonesService: PhonesService);
    getAllPhones(): Promise<import("../dto/phones/phone.entity").Phone[]>;
    getPhoneById(id: string): Promise<import("../dto/phones/phone.entity").Phone>;
    addPhone(phonesDto: CreatePhoneDto): Promise<import("../dto/phones/phone.entity").Phone>;
    deletePhone(id: string): Promise<void>;
}
