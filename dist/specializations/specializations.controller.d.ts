import { SpecializationsService } from './specializations.service';
import { CreateSpecializationDto } from './dto/create-specialization.dto';
import { UpdateSpecializationDto } from './dto/update-specialization.dto';
export declare class SpecializationsController {
    private readonly specializationsService;
    constructor(specializationsService: SpecializationsService);
    create(createSpecializationDto: CreateSpecializationDto): Promise<import("./entities/specialization.entity").Specialization>;
    findAll(): Promise<import("./entities/specialization.entity").Specialization[]>;
    findOne(id: string): Promise<import("./entities/specialization.entity").Specialization>;
    update(id: string, updateSpecializationDto: UpdateSpecializationDto): Promise<import("./entities/specialization.entity").Specialization>;
    remove(id: string): Promise<void>;
}
