import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSpecializationDto } from './dto/create-specialization.dto';
import { UpdateSpecializationDto } from './dto/update-specialization.dto';
import { Specialization } from './entities/specialization.entity';

@Injectable()
export class SpecializationsService {
  constructor(
    @InjectRepository(Specialization)
    private specializationRepository: Repository<Specialization>,
  ) {}

  async create(
    createSpecializationDto: CreateSpecializationDto,
  ): Promise<Specialization> {
    const specialization = new Specialization();
    specialization.scope = createSpecializationDto.scope;
    specialization.details = createSpecializationDto.details;
    return this.specializationRepository.save(specialization);
  }

  findAll(): Promise<Specialization[]> {
    return this.specializationRepository.find();
  }

  findOne(id: string) {
    const specialization = this.specializationRepository.findOne(id);
    if (!specialization) {
      throw new HttpException(
        `Specialization with id ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return specialization;
  }

  findByUserId(userId: string): Promise<Specialization[]> {
    return this.specializationRepository.find({
      where: {
        user: userId,
      },
    });
  }

  async update(id: string, updateSpecializationDto: UpdateSpecializationDto) {
    const specialization = await this.findOne(id);
    const updatedSpecialization: Specialization = {
      ...updateSpecializationDto,
      id: specialization.id,
    };
    return this.specializationRepository.save(updatedSpecialization);
  }

  async remove(id: string): Promise<void> {
    await this.specializationRepository.delete(id);
  }
}
