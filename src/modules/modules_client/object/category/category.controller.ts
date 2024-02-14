import { Controller } from '@nestjs/common';
import { CategoryService } from './category.service';
import { BaseClientController } from 'src/base';
import { Category } from 'src/entity/entity_client';

@Controller('category')
export class CategoryController extends BaseClientController<Category, Category, Category> {
  protected dtoClassCreate(): new () => Category{
    return {} as new () => Category;
  };
  protected dtoClassUpdate(): new () => Category{
      return {} as new () => Category;
  };

  constructor(private readonly _service: CategoryService) {
    super(_service)
  }
}
