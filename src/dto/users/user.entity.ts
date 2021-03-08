import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';
import { UserRole } from 'src/enums';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
  @IsUUID('all')
  id: string;

  @Column({ nullable: true, name: 'first_name', length: 25 })
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(25)
  firstName?: string;

  @Column({ nullable: true, name: 'last_name', length: 50 })
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  lastName?: string;

  @Column({ nullable: false, unique: true, length: 50 })
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  username: string;

  @Column({ nullable: false, name: 'user_password', length: 255 })
  @IsNotEmpty()
  @IsString()
  @MinLength(7)
  @MaxLength(255)
  userPassword: string;

  @Column({ nullable: false, unique: true, length: 50 })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Column({ name: 'user_role', nullable: false, length: 15 })
  @IsNotEmpty()
  userRole: UserRole;

  @Column({ nullable: true, length: 1000 })
  @IsOptional()
  @MaxLength(1000)
  description?: string;
}
