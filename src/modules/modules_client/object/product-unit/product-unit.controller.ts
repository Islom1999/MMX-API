import { Controller } from '@nestjs/common';
import { ProductUnitService } from './product-unit.service';
import { BaseClientController } from 'src/base';
import { ProductUnit } from 'src/entity/entity_client';

@Controller('product-unit')
export class ProductUnitController extends BaseClientController<ProductUnit, ProductUnit, ProductUnit> {
  protected dtoClassCreate(): new () => ProductUnit{
    return {} as new () => ProductUnit;
  };
  protected dtoClassUpdate(): new () => ProductUnit{
      return {} as new () => ProductUnit;
  };

  constructor(private readonly _service: ProductUnitService) {
    super(_service)
  }
}
