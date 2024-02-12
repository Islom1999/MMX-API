import { Injectable } from '@nestjs/common';
import { UnitCreateDto, UnitUpdateDto } from './dto/unit.dto';
import { BaseClientService } from 'src/base';
import { Unit } from 'src/entity/entity_client';
import { DatabaseConnectionProvider } from 'src/database';

@Injectable()
export class UnitService extends BaseClientService<Unit, UnitCreateDto, UnitUpdateDto> {

  constructor(private _dbConnectionProvider: DatabaseConnectionProvider) {
    super(_dbConnectionProvider, Unit);
  }

}
