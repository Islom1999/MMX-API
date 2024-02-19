import { Injectable } from '@nestjs/common';
import { BaseClientService } from 'src/base';
import { DatabaseConnectionProvider } from 'src/database';
import { Currency } from 'src/entity/entity_client';
import { CurrencyCreateDto, CurrencyUpdateDto } from './dto/currency.dto';

@Injectable()
export class CurrencyService extends BaseClientService<Currency, CurrencyCreateDto, CurrencyUpdateDto> {
    constructor(private _dbConnectionProvider: DatabaseConnectionProvider) {
        super(_dbConnectionProvider, Currency);
    }
}
