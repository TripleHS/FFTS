import { IsEmail } from 'class-validator';
import { UserRole } from 'src/enums';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: BigInt;

  @Column({ length: 25 })
  firstName: string;

  @Column({ length: 50 })
  lastName: string;

  @Column({ nullable: false, unique: true })
  username: string;

  @Column({ length: 255 })
  userPassword: string;

  @Column({ nullable: false, unique: true, length: 50 })
  @IsEmail()
  email: string;

  @Column({ nullable: false, length: 15 })
  userRole: UserRole;

  @Column({ length: 1000 })
  description: string;
}
