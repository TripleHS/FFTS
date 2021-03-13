import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from '../addresses/address.entity';
import { User } from '../users/user.entity';
import { Visit } from '../visits/visit.entity';

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
  visits: Visit[];
}
