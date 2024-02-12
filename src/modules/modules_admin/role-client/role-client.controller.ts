import { Controller } from '@nestjs/common';
import { RoleClientService } from './role-client.service';
import { BaseController } from 'src/base';
import { RoleClientDto } from './dto/role-client.dto';
import { RoleClient } from 'src/entity/entity_admin';

@Controller('role-client')
export class RoleClientController extends BaseController<RoleClient, RoleClientDto, RoleClientDto> {
  dtoClassCreate(): new () => RoleClientDto {
    return RoleClientDto;
  }
  dtoClassUpdate(): new () => RoleClientDto {
    return RoleClientDto;
  }

  constructor(private _service: RoleClientService) {
    super(_service)
  }
}
