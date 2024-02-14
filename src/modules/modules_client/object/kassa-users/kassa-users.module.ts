import { Module } from '@nestjs/common';
import { KassaUsersService } from './kassa-users.service';
import { KassaUsersController } from './kassa-users.controller';
import { KassaUsers } from 'src/entity/entity_client';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'src/common';
import { DatabaseCostumModule } from 'src/database';

@Module({
  controllers: [KassaUsersController],
  providers: [KassaUsersService],
  imports: [
    SharedModule,
    DatabaseCostumModule,
    TypeOrmModule.forFeature([KassaUsers]),
  ]
})
export class KassaUsersModule {}
