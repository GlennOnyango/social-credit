import { User } from 'src/user/user.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class Profile {
  @Column({ primary: true, generated: 'increment' })
  id: number;

  @Column({ nullable: true })
  name?: string;

  @Column({ type: 'date', nullable: true })
  dob?: Date;

  @Column({ unique: true, nullable: true })
  phone_no?: string;

  @Column({ unique: true, nullable: true })
  national_id?: string;

  @Column({ nullable: true })
  address?: string;

  @OneToOne(() => User, (user) => user.profile)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
