import { Module } from '@nestjs/common';
import { KassaService } from './kassa.service';
import { KassaController } from './kassa.controller';
import { Kassa } from 'src/entity/entity_client';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'src/common';
import { DatabaseCostumModule } from 'src/database';

@Module({
  controllers: [KassaController],
  providers: [KassaService],
  imports: [
    SharedModule,
    DatabaseCostumModule,
    TypeOrmModule.forFeature([Kassa]),
  ]
})
export class KassaModule {}
