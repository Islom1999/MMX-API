import { Controller } from '@nestjs/common';
import { KassaService } from './kassa.service';
import { BaseClientController } from 'src/base';
import { Kassa } from 'src/entity/entity_client';

@Controller('kassa')
export class KassaController extends BaseClientController<Kassa, Kassa, Kassa>{
  protected dtoClassCreate(): new () => Kassa{
    return {} as new () => Kassa;
  };
  protected dtoClassUpdate(): new () => Kassa{
      return {} as new () => Kassa;
  };

  constructor(private readonly _service: KassaService) {
    super(_service)
  }
}
