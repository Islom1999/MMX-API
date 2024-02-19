import { Body, Controller, Get, Patch, UseInterceptors } from '@nestjs/common';
import { SettingService } from './setting.service';
import { SetDbNameInterceptor } from 'src/common';
import { SettingsUpdateDto } from './dto/settings.dto';

@UseInterceptors(SetDbNameInterceptor)
@Controller('setting')
export class SettingController {

  constructor(private readonly _service: SettingService) {}

  @Get()
  getSetting() {
    return this._service.getSetting();
  }

  @Patch()
  update(@Body() data:SettingsUpdateDto) {
    return this._service.update(data);
  }

}
