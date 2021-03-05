import { User } from 'src/dto/users/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;
  @ManyToOne(() => User, (user) => user.addresses)
  user: User;
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
}
