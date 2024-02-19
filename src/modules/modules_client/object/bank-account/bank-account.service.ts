import { Injectable } from '@nestjs/common';
import { BaseClientService } from 'src/base';
import { DatabaseConnectionProvider } from 'src/database';
import { BankAccount } from 'src/entity/entity_client';
import { BankAccountCreateDto, BankAccountUpdateDto } from './dto/bank-account.dto';

@Injectable()
export class BankAccountService extends BaseClientService<BankAccount, BankAccountCreateDto, BankAccountUpdateDto>{
    constructor(private _dbConnectionProvider: DatabaseConnectionProvider) {
        super(_dbConnectionProvider, BankAccount);
    }
}