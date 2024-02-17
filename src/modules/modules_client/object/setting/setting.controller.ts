import { Controller, UseInterceptors } from '@nestjs/common';
import { SettingService } from './setting.service';
import { BaseClientController } from 'src/base';
import { Settings } from 'src/entity/entity_client';
import { SetDbNameInterceptor } from 'src/common';

@UseInterceptors(SetDbNameInterceptor)
@Controller('setting')
export class SettingController extends BaseClientController<Settings, Settings, Settings> {
  protected dtoClassCreate(): new () => Settings{
    return {} as new () => Settings;
  };
  protected dtoClassUpdate(): new () => Settings{
      return {} as new () => Settings;
  };

  constructor(private readonly _service: SettingService) {
    super(_service)
  }
}
