import { Module } from '@nestjs/common';
import { RoleClientService } from './role-client.service';
import { RoleClientController } from './role-client.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleClient } from 'src/entity/entity_admin';

@Module({
  controllers: [RoleClientController],
  providers: [RoleClientService],
  imports: [TypeOrmModule.forFeature([RoleClient])]
})
export class RoleClientModule {}
