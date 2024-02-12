import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RoleAdmin } from './role_admin';

@Entity('user_admin')
export class UserAdmin{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  name: string;

  @Column()
  hash: string;

  @Column({ nullable: true })
  hashed_rt: string;

  @Column({ default: false })
  is_block: boolean;

  @ManyToOne(() => RoleAdmin, (role) => role.user_client)
  @JoinColumn({ name: 'role_id' })
  role: RoleAdmin;

  @Column()
  role_id: string;
}
