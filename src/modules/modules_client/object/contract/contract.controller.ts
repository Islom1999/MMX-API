import { Controller } from '@nestjs/common';
import { ContractService } from './contract.service';
import { BaseClientController } from 'src/base';
import { Contract, Contragent } from 'src/entity/entity_client';

@Controller('contract')
export class ContractController extends BaseClientController<Contract, Contract, Contract> {
  protected dtoClassCreate(): new () => Contract{
    return {} as new () => Contract;
  };
  protected dtoClassUpdate(): new () => Contract{
      return {} as new () => Contract;
  };

  constructor(private readonly _service: ContractService) {
    super(_service)
  }
}
