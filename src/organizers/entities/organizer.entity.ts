import { WorkingHours } from 'src/working-hours/entites/working-hours.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from '../../addresses/entities/address.entity';
import { User } from '../../users/entities/user.entity';
import { Visit } from '../../visits/entities/visit.entity';

@Entity({ name: 'organizers' })
export class Organizer {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ length: 25 })
  title: string;
  @ManyToOne(() => User, (user) => user.organizers, { cascade: true })
  user: User;
  @ManyToOne(() => Address, (address) => address.organizers, { cascade: true })
  address: Address;
  @OneToMany(() => Visit, (visit) => visit.organizer)
  visits?: Visit[];
  @OneToMany(() => WorkingHours, (workingHours) => workingHours.organizer)
  workingHours?: WorkingHours[];
}
