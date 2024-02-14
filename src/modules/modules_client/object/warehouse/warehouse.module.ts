import { Module } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { WarehouseController } from './warehouse.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'src/common';
import { DatabaseCostumModule } from 'src/database';
import { Warehouse } from 'src/entity/entity_client';

@Module({
  controllers: [WarehouseController],
  providers: [WarehouseService],
  imports: [
    SharedModule,
    DatabaseCostumModule,
    TypeOrmModule.forFeature([Warehouse]),
  ]
})
export class WarehouseModule {}
