import { Controller } from '@nestjs/common';
import { PassportDataService } from './passport_data.service';
import { BaseClientController } from 'src/base';
import { PassportData } from 'src/entity/entity_client';

@Controller('passport-data')
export class PassportDataController extends BaseClientController<PassportData, PassportData, PassportData> {
  protected dtoClassCreate(): new () => PassportData{
    return {} as new () => PassportData;
  };
  protected dtoClassUpdate(): new () => PassportData{
      return {} as new () => PassportData;
  };

  constructor(private readonly _service: PassportDataService) {
    super(_service)
  }
}
