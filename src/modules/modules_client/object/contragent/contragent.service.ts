import { Injectable } from '@nestjs/common';
import { BaseClientService } from 'src/base';
import { DatabaseConnectionProvider } from 'src/database';
import { Contragent } from 'src/entity/entity_client';
import { ContragentCreateDto, ContragentUpdateDto } from './dto/contragent.dto';

@Injectable()
export class ContragentService extends BaseClientService<Contragent, ContragentCreateDto, ContragentUpdateDto> {
    constructor(private _dbConnectionProvider: DatabaseConnectionProvider) {
        super(_dbConnectionProvider, Contragent);
    }
}
