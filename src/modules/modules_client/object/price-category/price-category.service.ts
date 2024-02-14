import { Injectable } from '@nestjs/common';
import { BaseClientService } from 'src/base';
import { DatabaseConnectionProvider } from 'src/database';
import { PriceCategory } from 'src/entity/entity_client';

@Injectable()
export class PriceCategoryService extends BaseClientService<PriceCategory, PriceCategory, PriceCategory> {
    constructor(private _dbConnectionProvider: DatabaseConnectionProvider) {
        super(_dbConnectionProvider, PriceCategory);
    }
}
