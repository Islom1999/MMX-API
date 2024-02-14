import { Injectable } from '@nestjs/common';
import { BaseClientService } from 'src/base';
import { DatabaseConnectionProvider } from 'src/database';
import { Category } from 'src/entity/entity_client';

@Injectable()
export class CategoryService extends BaseClientService<Category, Category, Category> {
    constructor(private _dbConnectionProvider: DatabaseConnectionProvider) {
        super(_dbConnectionProvider, Category);
    }
}
