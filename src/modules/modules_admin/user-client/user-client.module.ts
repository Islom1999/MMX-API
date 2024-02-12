import { Module } from '@nestjs/common';
import { UserClientService } from './user-client.service';
import { UserClientController } from './user-client.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleClient, UserClient } from 'src/entity/entity_admin';

@Module({
  controllers: [UserClientController],
  providers: [UserClientService],
  imports: [TypeOrmModule.forFeature([UserClient, RoleClient])]
})
export class UserClientModule {}
