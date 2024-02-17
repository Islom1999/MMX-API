import { Controller, UseInterceptors } from '@nestjs/common';
import { KassaUsersService } from './kassa-users.service';
import { BaseClientController } from 'src/base';
import { KassaUsers } from 'src/entity/entity_client';
import { SetDbNameInterceptor } from 'src/common';

@UseInterceptors(SetDbNameInterceptor)
@Controller('kassa-users')
export class KassaUsersController extends BaseClientController<KassaUsers, KassaUsers, KassaUsers> {
  protected dtoClassCreate(): new () => KassaUsers{
    return {} as new () => KassaUsers;
  };
  protected dtoClassUpdate(): new () => KassaUsers{
      return {} as new () => KassaUsers;
  };

  constructor(private readonly _service: KassaUsersService) {
    super(_service)
  }
}
