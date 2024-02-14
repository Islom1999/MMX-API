import { Controller } from '@nestjs/common';
import { ProductService } from './product.service';
import { BaseClientController } from 'src/base';
import { Product } from 'src/entity/entity_client';

@Controller('product')
export class ProductController extends BaseClientController<Product, Product, Product> {
  protected dtoClassCreate(): new () => Product{
    return {} as new () => Product;
  };
  protected dtoClassUpdate(): new () => Product{
      return {} as new () => Product;
  };

  constructor(private readonly _service: ProductService) {
    super(_service)
  }
}
