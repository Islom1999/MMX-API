import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { UserClient } from './user_client';

@Entity('organisation')
export class Organization {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  database_name: string;

  @Column({ default: false })
  is_active: boolean;

  @OneToMany(() => UserClient, user => user.organisation)
  users: UserClient[];
}
