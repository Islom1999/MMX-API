import { Controller, UseInterceptors } from '@nestjs/common';
import { KassaGroupService } from './kassa_group.service';
import { BaseClientController } from 'src/base';
import { KassaGroup } from 'src/entity/entity_client';
import { SetDbNameInterceptor } from 'src/common';

@UseInterceptors(SetDbNameInterceptor)
@Controller('kassa-group')
export class KassaGroupController extends BaseClientController<KassaGroup, KassaGroup, KassaGroup> {
  protected dtoClassCreate(): new () => KassaGroup{
    return {} as new () => KassaGroup;
  };
  protected dtoClassUpdate(): new () => KassaGroup{
      return {} as new () => KassaGroup;
  };

  constructor(private readonly _service: KassaGroupService) {
    super(_service)
  }
}
