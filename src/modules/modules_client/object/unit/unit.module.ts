import { Module } from '@nestjs/common';
import { UnitController } from './unit.controller';
import { UnitService } from './unit.service';
import { SetDbNameInterceptor, SharedModule } from 'src/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductUnit, Unit } from 'src/entity/entity_client';
import { DatabaseCostumModule } from 'src/database';

@Module({
  controllers: [UnitController],
  providers: [
    UnitService,
    SetDbNameInterceptor,
  ],
  imports: [
    SharedModule,
    DatabaseCostumModule,
    TypeOrmModule.forFeature([Unit, ProductUnit]),
  ]
})
export class UnitModule {}
