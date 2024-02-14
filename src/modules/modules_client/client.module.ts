import { Module } from '@nestjs/common';
import { DbContextService, SharedModule } from 'src/common';
import { JwtModule } from '@nestjs/jwt';
import { UnitModule } from './object/unit/unit.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccount, Category, Contract, Contragent, Currency, Kassa, KassaGroup, KassaUsers, PassportData, PriceCategory, ProductUnit, Product, SaleObject, Settings, Unit, Warehouse } from 'src/entity/entity_client';
import { ProductUnitModule, BankAccountModule, CategoryModule, ContractModule, ContragentModule, CurrencyModule, KassaGroupModule, KassaUsersModule, KassaModule, PassportDataModule, PriceCategoryModule, ProductModule, SaleObjectModule, SettingModule, WarehouseModule } from './object';

@Module({
  providers: [
    DbContextService,
  ],
  controllers: [],
  imports: [
    // SharedModule,
    JwtModule.register({}),
    TypeOrmModule.forFeature([
      BankAccount, Category, Contract, Contragent, Currency, Kassa, KassaGroup, KassaUsers, PassportData, PriceCategory, ProductUnit, Product, SaleObject, Settings, Unit, Warehouse
    ]),
    UnitModule,
    ProductUnitModule,
    BankAccountModule,
    CategoryModule,
    ContractModule,
    ContragentModule,
    CurrencyModule,
    KassaGroupModule,
    KassaUsersModule,
    KassaModule,
    PassportDataModule,
    PriceCategoryModule,
    ProductModule,
    SaleObjectModule,
    SettingModule,
    WarehouseModule,
  ],
  exports: [
    UnitModule
  ]
})
export class ClientModule {}
