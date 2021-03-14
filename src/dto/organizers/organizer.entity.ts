import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from '../addresses/address.entity';
import { User } from '../users/user.entity';

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
}
