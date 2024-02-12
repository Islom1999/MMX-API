import { Module } from '@nestjs/common';
import { RoleAdminService } from './role-admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleAdmin } from 'src/entity/entity_admin/role_admin';
import { RoleAdminController } from './role-admin.controller';

@Module({
  controllers: [RoleAdminController],
  providers: [RoleAdminService],
  imports: [TypeOrmModule.forFeature([RoleAdmin])]
})
export class RoleAdminModule {}
