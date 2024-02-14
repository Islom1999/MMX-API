import { Injectable } from '@nestjs/common';
import { BaseClientService } from 'src/base';
import { DatabaseConnectionProvider } from 'src/database';
import { SaleObject } from 'src/entity/entity_client';

@Injectable()
export class SaleObjectService extends BaseClientService<SaleObject, SaleObject, SaleObject>{
    constructor(private _dbConnectionProvider: DatabaseConnectionProvider) {
        super(_dbConnectionProvider, SaleObject);
    }
}
