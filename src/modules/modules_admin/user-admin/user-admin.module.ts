import { Module } from '@nestjs/common';
import { UserAdminService } from './user-admin.service';
import { UserAdminController } from './user-admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleAdmin, UserAdmin } from 'src/entity/entity_admin';

@Module({
  controllers: [UserAdminController],
  providers: [UserAdminService],
  imports: [TypeOrmModule.forFeature([UserAdmin, RoleAdmin])]
})
export class UserAdminModule {}
