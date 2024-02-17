import { Injectable } from '@nestjs/common';
import { BaseClientService } from 'src/base';
import { DatabaseConnectionProvider } from 'src/database';
import { Category } from 'src/entity/entity_client';
import { CategoryCreateDto, CategoryUpdateDto } from './dto/category.dto';

@Injectable()
export class CategoryService extends BaseClientService<Category, CategoryCreateDto, CategoryUpdateDto> {
    constructor(private _dbConnectionProvider: DatabaseConnectionProvider) {
        super(_dbConnectionProvider, Category);
    }
}
