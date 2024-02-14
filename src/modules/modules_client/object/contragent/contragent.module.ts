import { Module } from '@nestjs/common';
import { ContragentService } from './contragent.service';
import { ContragentController } from './contragent.controller';
import { Contragent } from 'src/entity/entity_client';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'src/common';
import { DatabaseCostumModule } from 'src/database';

@Module({
  controllers: [ContragentController],
  providers: [ContragentService],
  imports: [
    SharedModule,
    DatabaseCostumModule,
    TypeOrmModule.forFeature([Contragent]),
  ]
})
export class ContragentModule {}
