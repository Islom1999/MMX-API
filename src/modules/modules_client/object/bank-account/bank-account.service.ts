import { Injectable } from '@nestjs/common';
import { BaseClientService } from 'src/base';
import { DatabaseConnectionProvider } from 'src/database';
import { BankAccount } from 'src/entity/entity_client';

@Injectable()
export class BankAccountService extends BaseClientService<BankAccount, BankAccount, BankAccount>{
    constructor(private _dbConnectionProvider: DatabaseConnectionProvider) {
        super(_dbConnectionProvider, BankAccount);
    }
}
