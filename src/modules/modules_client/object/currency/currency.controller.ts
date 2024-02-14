import { Controller } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { BaseClientController } from 'src/base';
import { Currency } from 'src/entity/entity_client';

@Controller('currency')
export class CurrencyController extends BaseClientController<Currency, Currency, Currency>{
  protected dtoClassCreate(): new () => Currency{
    return {} as new () => Currency;
  };
  protected dtoClassUpdate(): new () => Currency{
      return {} as new () => Currency;
  };

  constructor(private readonly _service: CurrencyService) {
    super(_service)
  }
}
