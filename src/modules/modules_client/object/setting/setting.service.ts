import { Injectable } from '@nestjs/common';
import { BaseClientService } from 'src/base';
import { DatabaseConnectionProvider } from 'src/database';
import { Settings } from 'src/entity/entity_client';

@Injectable()
export class SettingService extends BaseClientService<Settings, Settings, Settings> {
    constructor(private _dbConnectionProvider: DatabaseConnectionProvider) {
        super(_dbConnectionProvider, Settings);
    }
}
