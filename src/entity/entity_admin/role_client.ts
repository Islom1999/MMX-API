import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserClient } from './user_client';
import { PermissionClient } from 'src/common/enums/permission_client';

@Entity('role_client')
export class RoleClient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({
    type: 'enum',
    enum: PermissionClient, 
    array: true, 
    default: [PermissionClient.VIEW] 
  })
  permissions: PermissionClient[];

  @OneToMany(() => UserClient, (user) => user.role)
  user_client: UserClient[];
}
