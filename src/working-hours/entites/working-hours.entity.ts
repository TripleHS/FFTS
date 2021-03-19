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

  @Column({ name: 'date', type: 'date' })
  date: Date;

  @Column({ name: 'shift-end', type: 'date', nullable: true })
  shiftEndDate: Date;

  @Column({ name: 'start-hour', type: 'time' })
  startHour: Date;

  @Column({ name: 'end-hour', type: 'time' })
  endHour: Date;

  @Column({ name: 'lunch-time', type: 'time', nullable: true })
  lunchTime?: Date;

  @Column({ name: 'lunch-duration', type: 'int', nullable: true })
  lunchDuration?: number;
}
