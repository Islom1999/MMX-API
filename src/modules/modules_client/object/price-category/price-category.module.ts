import { Module } from '@nestjs/common';
import { PriceCategoryService } from './price-category.service';
import { PriceCategoryController } from './price-category.controller';
import { PriceCategory } from 'src/entity/entity_client';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'src/common';
import { DatabaseCostumModule } from 'src/database';

@Module({
  controllers: [PriceCategoryController],
  providers: [PriceCategoryService],
  imports: [
    SharedModule,
    DatabaseCostumModule,
    TypeOrmModule.forFeature([PriceCategory]),
  ]
})
export class PriceCategoryModule {}
