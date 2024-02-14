import { Module } from '@nestjs/common';
import { KassaGroupService } from './kassa_group.service';
import { KassaGroupController } from './kassa_group.controller';
import { KassaGroup } from 'src/entity/entity_client';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'src/common';
import { DatabaseCostumModule } from 'src/database';

@Module({
  controllers: [KassaGroupController],
  providers: [KassaGroupService],
  imports: [
    SharedModule,
    DatabaseCostumModule,
    TypeOrmModule.forFeature([KassaGroup]),
  ]
})
export class KassaGroupModule {}
