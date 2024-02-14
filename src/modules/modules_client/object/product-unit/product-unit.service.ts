import { Injectable } from '@nestjs/common';
import { BaseClientService } from 'src/base';
import { DatabaseConnectionProvider } from 'src/database';
import { ProductUnit } from 'src/entity/entity_client';

@Injectable()
export class ProductUnitService extends BaseClientService<ProductUnit, ProductUnit, ProductUnit>{
    constructor(private _dbConnectionProvider: DatabaseConnectionProvider) {
        super(_dbConnectionProvider, ProductUnit);
    }
}
