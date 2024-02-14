import { Injectable } from '@nestjs/common';
import { BaseClientService } from 'src/base';
import { DatabaseConnectionProvider } from 'src/database';
import { Kassa } from 'src/entity/entity_client';

@Injectable()
export class KassaService extends BaseClientService<Kassa, Kassa, Kassa> {
    constructor(private _dbConnectionProvider: DatabaseConnectionProvider) {
        super(_dbConnectionProvider, Kassa);
    }
}
