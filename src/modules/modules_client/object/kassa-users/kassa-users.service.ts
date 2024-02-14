import { Injectable } from '@nestjs/common';
import { BaseClientService } from 'src/base';
import { DatabaseConnectionProvider } from 'src/database';
import { KassaUsers } from 'src/entity/entity_client';

@Injectable()
export class KassaUsersService extends BaseClientService<KassaUsers, KassaUsers, KassaUsers> {
    constructor(private _dbConnectionProvider: DatabaseConnectionProvider) {
        super(_dbConnectionProvider, KassaUsers);
    }
}
