import { Organizer } from 'src/organizers/entities/organizer.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'working-hours' })
export class WorkingHours {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Organizer, (organizer) => organizer.workingHours, {
    cascade: true,
  })
  organizer: Organizer;

  @Column({ name: 'date', type: 'datetime' })
  date: Date;

  @Column({ name: 'start-hour', type: 'datetime' })
  startHour: Date;

  @Column({ name: 'end-hour', type: 'datetime' })
  endHour: Date;

  @Column({ name: 'lunch-time', type: 'datetime', nullable: true })
  lunchTime?: Date;

  @Column({ name: 'lunch-duration', type: 'int', nullable: true })
  lunchDuration?: number;
}
