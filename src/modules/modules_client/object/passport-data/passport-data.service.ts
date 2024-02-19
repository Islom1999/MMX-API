import { Injectable } from '@nestjs/common';
import { BaseClientService } from 'src/base';
import { DatabaseConnectionProvider } from 'src/database';
import { PassportData } from 'src/entity/entity_client';
import { PassportDataCreateDto, PassportDataUpdateDto } from './dto/passport-data.dto';

@Injectable()
export class PassportDataService extends BaseClientService<PassportData, PassportDataCreateDto, PassportDataUpdateDto> {
    constructor(private _dbConnectionProvider: DatabaseConnectionProvider) {
        super(_dbConnectionProvider, PassportData);
    }
}
