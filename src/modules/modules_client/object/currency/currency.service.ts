import { Injectable } from '@nestjs/common';
import { BaseClientService } from 'src/base';
import { DatabaseConnectionProvider } from 'src/database';
import { Currency } from 'src/entity/entity_client';

@Injectable()
export class CurrencyService extends BaseClientService<Currency, Currency, Currency> {
    constructor(private _dbConnectionProvider: DatabaseConnectionProvider) {
        super(_dbConnectionProvider, Currency);
    }
}
