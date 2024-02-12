import { Controller } from '@nestjs/common';
import { RoleAdminService } from './role-admin.service';
import { BaseController } from 'src/base';
import { RoleAdminDto } from './dto/role-admin.dto';
import { RoleAdmin } from 'src/entity/entity_admin';

@Controller('role-admin')
export class RoleAdminController extends BaseController<RoleAdmin,RoleAdminDto, RoleAdminDto> {
  dtoClassCreate(): new () => RoleAdminDto {
    return RoleAdminDto;
  }
  dtoClassUpdate(): new () => RoleAdminDto {
    return RoleAdminDto;
  }

  constructor(private _service: RoleAdminService) {
    super(_service);
  }

  // @Post()
  // async creates(@Body() data: RoleAdminDto) {
  //   // return this.service.create(_data);
  // }
}
