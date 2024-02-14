import { Controller } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { BaseClientController } from 'src/base';
import { Warehouse } from 'src/entity/entity_client';

@Controller('warehouse')
export class WarehouseController extends BaseClientController<Warehouse, Warehouse, Warehouse> {
  protected dtoClassCreate(): new () => Warehouse{
    return {} as new () => Warehouse;
  };
  protected dtoClassUpdate(): new () => Warehouse{
      return {} as new () => Warehouse;
  };

  constructor(private readonly _service: WarehouseService) {
    super(_service)
  }
}
