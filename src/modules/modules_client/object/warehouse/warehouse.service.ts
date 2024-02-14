import { Injectable } from '@nestjs/common';
import { BaseClientService } from 'src/base';
import { DatabaseConnectionProvider } from 'src/database';
import { Warehouse } from 'src/entity/entity_client';

@Injectable()
export class WarehouseService extends BaseClientService<Warehouse, Warehouse, Warehouse> {
    constructor(private _dbConnectionProvider: DatabaseConnectionProvider) {
        super(_dbConnectionProvider, Warehouse);
    }
}
