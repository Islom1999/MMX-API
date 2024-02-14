import { Module } from '@nestjs/common';
import { ProductUnitService } from './product-unit.service';
import { ProductUnitController } from './product-unit.controller';
import { ProductUnit } from 'src/entity/entity_client';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'src/common';
import { DatabaseCostumModule } from 'src/database';

@Module({
  controllers: [ProductUnitController],
  providers: [ProductUnitService],
  imports: [
    SharedModule,
    DatabaseCostumModule,
    TypeOrmModule.forFeature([ProductUnit]),
  ]
})
export class ProductUnitModule {}
