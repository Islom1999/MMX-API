import { Injectable } from '@nestjs/common';
import { BaseClientService } from 'src/base';
import { DatabaseConnectionProvider } from 'src/database';
import { Barcode } from 'src/entity/entity_client';
import { BarcodeCreateDto, BarcodeUpdateDto } from './dto/barcode.dto';

@Injectable()
export class BarcodeService extends BaseClientService<Barcode, BarcodeCreateDto, BarcodeUpdateDto> {
    constructor(private _dbConnectionProvider: DatabaseConnectionProvider) {
        super(_dbConnectionProvider, Barcode);
    }
}
