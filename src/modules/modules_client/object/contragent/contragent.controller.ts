import { Controller } from '@nestjs/common';
import { ContragentService } from './contragent.service';
import { BaseClientController } from 'src/base';
import { Contragent } from 'src/entity/entity_client';

@Controller('contragent')
export class ContragentController extends BaseClientController<Contragent, Contragent, Contragent> {
  protected dtoClassCreate(): new () => Contragent{
    return {} as new () => Contragent;
  };
  protected dtoClassUpdate(): new () => Contragent{
      return {} as new () => Contragent;
  };

  constructor(private readonly _service: ContragentService) {
    super(_service)
  }
}