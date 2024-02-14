import { Injectable } from '@nestjs/common';
import { BaseClientService } from 'src/base';
import { DatabaseConnectionProvider } from 'src/database';
import { PassportData } from 'src/entity/entity_client';

@Injectable()
export class PassportDataService extends BaseClientService<PassportData, PassportData, PassportData> {
    constructor(private _dbConnectionProvider: DatabaseConnectionProvider) {
        super(_dbConnectionProvider, PassportData);
    }
}
