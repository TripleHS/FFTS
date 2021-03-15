import { Repository } from 'typeorm';
import { CreateSpecializationDto } from './dto/create-specialization.dto';
import { UpdateSpecializationDto } from './dto/update-specialization.dto';
import { Specialization } from './entities/specialization.entity';
export declare class SpecializationsService {
    private specializationRepository;
    constructor(specializationRepository: Repository<Specialization>);
    create(createSpecializationDto: CreateSpecializationDto): Promise<Specialization>;
    findAll(): Promise<Specialization[]>;
    findOne(id: string): Promise<Specialization>;
    findByUserId(userId: string): Promise<Specialization[]>;
    update(id: string, updateSpecializationDto: UpdateSpecializationDto): Promise<Specialization>;
    remove(id: string): Promise<void>;
}
