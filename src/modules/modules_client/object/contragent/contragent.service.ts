import { Injectable } from '@nestjs/common';
import { BaseClientService } from 'src/base';
import { DatabaseConnectionProvider } from 'src/database';
import { Contragent } from 'src/entity/entity_client';

@Injectable()
export class ContragentService extends BaseClientService<Contragent, Contragent, Contragent> {
    constructor(private _dbConnectionProvider: DatabaseConnectionProvider) {
        super(_dbConnectionProvider, Contragent);
    }
}
