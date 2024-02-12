import { Module } from '@nestjs/common';
import { AtStrategyAdmin, RtStrategyAdmin } from './strategies';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AuthAdminController } from './auth-admin.controller';
import { AuthAdminService } from './auth-admin.service';
import { RoleAdmin, UserAdmin } from 'src/entity/entity_admin';

@Module({
  controllers: [AuthAdminController],
  providers: [
    AuthAdminService,
    RtStrategyAdmin,
    AtStrategyAdmin,
  ],
  imports: [
    TypeOrmModule.forFeature([UserAdmin,RoleAdmin]),
    JwtModule.register({}),
  ],
})
export class AuthAdminModule {}
