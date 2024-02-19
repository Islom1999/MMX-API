import { Module } from '@nestjs/common';
import { PassportDataService } from './passport-data.service';
import { PassportDataController } from './passport-data.controller';
import { PassportData } from 'src/entity/entity_client';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'src/common';
import { DatabaseCostumModule } from 'src/database';

@Module({
  controllers: [PassportDataController],
  providers: [PassportDataService],
  imports: [
    SharedModule,
    DatabaseCostumModule,
    TypeOrmModule.forFeature([PassportData]),
  ]
})
export class PassportDataModule {}
