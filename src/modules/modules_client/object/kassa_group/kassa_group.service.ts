import { Injectable } from '@nestjs/common';
import { BaseClientService } from 'src/base';
import { DatabaseConnectionProvider } from 'src/database';
import { KassaGroup } from 'src/entity/entity_client';

@Injectable()
export class KassaGroupService extends BaseClientService<KassaGroup, KassaGroup, KassaGroup> {
    constructor(private _dbConnectionProvider: DatabaseConnectionProvider) {
        super(_dbConnectionProvider, KassaGroup);
    }
}
