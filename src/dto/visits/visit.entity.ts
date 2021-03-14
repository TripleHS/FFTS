import { VisitType } from 'src/enums';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Organizer } from '../organizers/organizer.entity';
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
  users: User[];
  @ManyToOne(() => Organizer, (organizer) => organizer.visits, {
    cascade: true,
  })
  organizer: Organizer;
}
