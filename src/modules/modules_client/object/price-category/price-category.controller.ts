import { Controller, UseInterceptors } from '@nestjs/common';
import { PriceCategoryService } from './price-category.service';
import { BaseClientController } from 'src/base';
import { PriceCategory } from 'src/entity/entity_client';
import { SetDbNameInterceptor } from 'src/common';

@UseInterceptors(SetDbNameInterceptor)
@Controller('price-category')
export class PriceCategoryController extends BaseClientController<PriceCategory, PriceCategory, PriceCategory> {
  protected dtoClassCreate(): new () => PriceCategory{
    return {} as new () => PriceCategory;
  };
  protected dtoClassUpdate(): new () => PriceCategory{
      return {} as new () => PriceCategory;
  };

  constructor(private readonly _service: PriceCategoryService) {
    super(_service)
  }
}
