import { Controller } from '@nestjs/common';
import { SaleObjectService } from './sale-object.service';
import { BaseClientController } from 'src/base';
import { SaleObject } from 'src/entity/entity_client';

@Controller('sale-object')
export class SaleObjectController extends BaseClientController<SaleObject, SaleObject, SaleObject> {
  protected dtoClassCreate(): new () => SaleObject{
    return {} as new () => SaleObject;
  };
  protected dtoClassUpdate(): new () => SaleObject{
      return {} as new () => SaleObject;
  };

  constructor(private readonly _service: SaleObjectService) {
    super(_service)
  }
}
