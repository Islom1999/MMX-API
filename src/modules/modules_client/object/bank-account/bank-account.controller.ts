import { Controller, UseInterceptors } from '@nestjs/common';
import { BankAccountService } from './bank-account.service';
import { BaseClientController } from 'src/base';
import { BankAccount } from 'src/entity/entity_client';
import { SetDbNameInterceptor } from 'src/common';

@UseInterceptors(SetDbNameInterceptor)
@Controller('bank-account')
export class BankAccountController extends BaseClientController<BankAccount, BankAccount, BankAccount>{
  protected dtoClassCreate(): new () => BankAccount{
    return {} as new () => BankAccount;
  };
  protected dtoClassUpdate(): new () => BankAccount{
      return {} as new () => BankAccount;
  };

  constructor(private readonly _service: BankAccountService) {
    super(_service)
  }
}
