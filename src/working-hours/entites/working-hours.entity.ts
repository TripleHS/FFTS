import { Organizer } from 'src/organizers/entities/organizer.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'working-hours' })
export class WorkingHours {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Organizer, (organizer) => organizer.workingHours)
  organizer: Organizer;

  @Column({ name: 'start-hour', type: 'datetime' })
  startHour: Date;

  @Column({ name: 'end-hour', type: 'datetime' })
  endHour: Date;

  @Column({ name: 'lunch-time', type: 'datetime' })
  lunchTime: Date;

  @Column({ name: 'lunch-duration', type: 'int' })
  lunchDuration: number;
}
