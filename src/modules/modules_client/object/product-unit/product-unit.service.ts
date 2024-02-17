import { Injectable } from '@nestjs/common';
import { BaseClientService } from 'src/base';
import { DatabaseConnectionProvider } from 'src/database';
import { ProductUnit } from 'src/entity/entity_client';
import { ProductUnitCreateDto, ProductUnitUpdateDto } from './dto/product-unit.dto';

@Injectable()
export class ProductUnitService extends BaseClientService<ProductUnit, ProductUnitCreateDto, ProductUnitUpdateDto>{
    constructor(private _dbConnectionProvider: DatabaseConnectionProvider) {
        super(_dbConnectionProvider, ProductUnit);
    }
}
