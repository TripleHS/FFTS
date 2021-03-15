import { IsNotEmpty, IsString, IsUUID, MaxLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Specialization {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID('all')
  id: string;

  @Column({ length: 25 })
  @IsString()
  @IsNotEmpty()
  @MaxLength(25)
  scope: string;

  @Column({ length: 50 })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  details: string;
}
