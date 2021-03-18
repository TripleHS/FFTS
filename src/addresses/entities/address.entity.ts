import { User } from 'src/dto/users/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Organizer } from '../../organizers/entities/organizer.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ name: 'street', length: 50 })
  street: string;
  @Column({ name: 'building', length: 15 })
  building: string;
  @Column({ name: 'apartment', length: 10, nullable: true })
  apartment: string;
  @Column({ name: 'postal_code', length: 6 })
  postalCode: string;
  @Column({ name: 'city', length: 50 })
  city: string;
  @Column({ name: 'country_state', length: 25 })
  state: string;
  @Column({ name: 'country', length: 50 })
  country: string;
  @Column({ name: 'additional_info', length: 1000, nullable: true })
  additionalInfo: string;
  @ManyToOne(() => User, (user) => user.addresses, { cascade: true })
  user: User;
  @OneToMany(() => Organizer, (organizer) => organizer.address)
  organizers?: Organizer[];
}
