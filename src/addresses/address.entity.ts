import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => User, (user) => user.addresses, { cascade: true })
  user: User;
  @Column()
  street: string;
  @Column()
  building: string;
  @Column()
  apartment: string;
  @Column()
  postalCode: string;
  @Column()
  city: string;
  @Column()
  state: string;
  @Column()
  country: string;
  @Column()
  additionalInfo: string;
}
