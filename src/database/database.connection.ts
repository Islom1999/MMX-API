import { Injectable, Scope, } from '@nestjs/common';
import { DbContextService } from 'src/common';
import { BankAccount, Barcode, Category, Contract, Contragent, Currency, Kassa, KassaGroup, KassaUsers, PassportData, PriceCategory, Product, ProductUnit, SaleObject, Settings, Unit, Warehouse } from 'src/entity/entity_client';

import { Connection, ConnectionManager, getConnectionManager } from 'typeorm';

@Injectable({ scope: Scope.REQUEST })
export class DatabaseConnectionProvider {
  private connectionManager: ConnectionManager;

  constructor(private context: DbContextService) {
    this.connectionManager = getConnectionManager();
  }

  async getConnection(): Promise<Connection> {
    const dbName = this.context.get_db_name; // RequestContext orqali dbName olish

    let connection: Connection;
    
    if (this.connectionManager.has(dbName)) {
      // Mavjud ulanishni olish yoki yangi ulanish ochish
      connection = this.connectionManager.get(dbName);
      if (!connection.isConnected) {
        await connection.connect();
      }
    } else {
      // Yangi ulanish yaratish va ulanishni faollashtirish
      connection = this.connectionManager.create({
        name: dbName,
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'islomdev',
        password: 'islomdev123',
        database: dbName,
        entities: [
          BankAccount, Category, Contract, Contragent, Currency, Kassa, KassaGroup, KassaUsers, PassportData, PriceCategory, ProductUnit, Product, SaleObject, Settings, Unit, Warehouse,Barcode,
        ],
        synchronize: true,
      });
      await connection.connect();
    }
    
    return connection;
  }
}

