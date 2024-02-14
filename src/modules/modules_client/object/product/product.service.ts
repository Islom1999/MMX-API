import { Injectable } from '@nestjs/common';
import { BaseClientService } from 'src/base';
import { DatabaseConnectionProvider } from 'src/database';
import { Product } from 'src/entity/entity_client';

@Injectable()
export class ProductService extends BaseClientService<Product, Product, Product> {
    constructor(private _dbConnectionProvider: DatabaseConnectionProvider) {
        super(_dbConnectionProvider, Product);
    }
}
