import { IsEmail } from 'class-validator';
import { UserRole } from 'src/enums';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Visit } from '../visits/visit.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string;

  @Column({ name: 'first_name', length: 25 })
  firstName?: string;

  @Column({ name: 'last_name', length: 50 })
  lastName?: string;

  @Column({ nullable: false, unique: true })
  username: string;

  @Column({ name: 'user_password', length: 255 })
  userPassword: string;

  @Column({ nullable: false, unique: true, length: 50 })
  @IsEmail()
  email: string;

  @Column({ name: 'user_role', nullable: false, length: 15 })
  userRole: UserRole;

  @Column({ length: 1000 })
  description?: string;

  @ManyToMany(() => Visit, (visit) => visit.users)
  visits?: Visit[];
}
