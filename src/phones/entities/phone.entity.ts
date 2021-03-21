import { IsPhoneNumber } from 'class-validator';
import { PhoneType } from 'src/enums';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Phone {
  @PrimaryColumn({ name: 'phone_number', length: 25 })
  @IsPhoneNumber()
  phoneNumber: string;

  @ManyToOne(() => User, (user) => user.phones)
  user: User;

  @Column({ name: 'phone_type' })
  phoneType: PhoneType;
}
