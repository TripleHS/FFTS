import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity({ name: 'organizers' })
export class Organizer {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: bigint;
  @ManyToOne(() => User, (user) => user.organizers)
  user: User;
  @Column({ length: 50 })
  address: string;
  @Column({ length: 25 })
  title: string;
}
