import { VisitType } from 'src/enums';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity({ name: 'visits' })
export class Visit {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'datetime' })
  date: Date;
  @Column({ type: 'int' })
  duration: number;
  @Column({ name: 'visit_type', length: 15 })
  visitType: VisitType;
  @ManyToMany(() => User, (user) => user.visits)
  users: User[];
  @Column({ type: 'bigint' })
  organizer: number;
}
