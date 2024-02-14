import { Injectable } from '@nestjs/common';
import { BaseClientService } from 'src/base';
import { DatabaseConnectionProvider } from 'src/database';
import { Contract } from 'src/entity/entity_client';

@Injectable()
export class ContractService extends BaseClientService<Contract, Contract, Contract> {
    constructor(private _dbConnectionProvider: DatabaseConnectionProvider) {
        super(_dbConnectionProvider, Contract);
    }
}
