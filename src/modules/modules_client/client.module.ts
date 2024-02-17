import { Module } from '@nestjs/common';
import { DbContextService } from 'src/common';
import { JwtModule } from '@nestjs/jwt';
import { UnitModule } from './object/unit/unit.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccount, Category, Contract, Contragent, Currency, Kassa, KassaGroup, KassaUsers, PassportData, PriceCategory, ProductUnit, Product, SaleObject, Settings, Unit, Warehouse, Barcode } from 'src/entity/entity_client';
import { ProductUnitModule, BankAccountModule, CategoryModule, ContractModule, ContragentModule, CurrencyModule, KassaGroupModule, KassaUsersModule, KassaModule, PassportDataModule, PriceCategoryModule, ProductModule, SaleObjectModule, SettingModule, WarehouseModule, BarcodeModule } from './object';
import { Organization, RoleClient, UserClient } from 'src/entity/entity_admin';

@Module({
  providers: [
    DbContextService,
  ],
  controllers: [],
  imports: [
    JwtModule.register({}),
    TypeOrmModule.forFeature([
      BankAccount, Category, Contract, Contragent, Currency, Kassa, KassaGroup, KassaUsers, PassportData, PriceCategory, ProductUnit, Product, SaleObject, Settings, Unit, Warehouse, Barcode
    ]),
    TypeOrmModule.forFeature([UserClient, Organization, RoleClient]),
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
    BarcodeModule,
  ],
  exports: [
    UnitModule
  ]
})
export class ClientModule {
  
}
