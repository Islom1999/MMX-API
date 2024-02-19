import { Injectable } from '@nestjs/common';
import { BaseClientService } from 'src/base';
import { DatabaseConnectionProvider } from 'src/database';
import { Contract } from 'src/entity/entity_client';
import { ContractCreateDto, ContractUpdateDto } from './dto/contract.dto';

@Injectable()
export class ContractService extends BaseClientService<Contract, ContractCreateDto, ContractUpdateDto> {
    constructor(private _dbConnectionProvider: DatabaseConnectionProvider) {
        super(_dbConnectionProvider, Contract);
    }
}
