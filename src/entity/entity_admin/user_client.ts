import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RoleClient } from './role_client';
import { Organization } from './organisation';

@Entity('user_client')
export class UserClient{
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

  @ManyToOne(() => RoleClient, (role) => role.user_client)
  @JoinColumn({ name: 'role_id' })
  role: RoleClient;

  @Column()
  role_id: string;

  @ManyToOne(() => Organization, organization => organization.users)
  @JoinColumn({ name: 'organisation_id' })
  organisation: Organization;

  @Column()
  organisation_id: string;
}
