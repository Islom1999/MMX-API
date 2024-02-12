import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserAdmin } from './user_admin';
import { PermissionAdmin } from 'src/common';

@Entity('role_admin')
export class RoleAdmin {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({
    type: 'enum',
    enum: PermissionAdmin, 
    array: true, 
    default: [PermissionAdmin.VIEW] 
  })
  permissions: PermissionAdmin[];

  @OneToMany(() => UserAdmin, (user) => user.role)
  user_client: UserAdmin[];
}
