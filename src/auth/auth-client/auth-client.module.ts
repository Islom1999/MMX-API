import { Module } from '@nestjs/common';
import { AuthClientController } from './auth-client.controller';
import { AuthClientService } from './auth-client.service';
import { AtStrategyClient, RtStrategyClient } from './strategies';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserClient } from 'src/entity/entity_admin/user_client';
import { RoleClient } from 'src/entity/entity_admin/role_client';

@Module({
  controllers: [AuthClientController],
  providers: [
    AuthClientService,
    AtStrategyClient,
    RtStrategyClient,
  ],
  imports: [
    TypeOrmModule.forFeature([UserClient]),
    JwtModule.register({}),
  ]
})
export class AuthClientModule {}
