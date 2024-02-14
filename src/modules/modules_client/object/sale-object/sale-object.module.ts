import { Module } from '@nestjs/common';
import { SaleObjectService } from './sale-object.service';
import { SaleObjectController } from './sale-object.controller';
import { SaleObject } from 'src/entity/entity_client';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'src/common';
import { DatabaseCostumModule } from 'src/database';

@Module({
  controllers: [SaleObjectController],
  providers: [SaleObjectService],
  imports: [
    SharedModule,
    DatabaseCostumModule,
    TypeOrmModule.forFeature([SaleObject]),
  ]
})
export class SaleObjectModule {}
