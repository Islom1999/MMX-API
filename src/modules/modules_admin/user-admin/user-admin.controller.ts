import { Controller } from '@nestjs/common';
import { UserAdminService } from './user-admin.service';
import { BaseController } from 'src/base';
import { UserAdminDto } from './dto/user-admin.dto';
import { UserAdmin } from 'src/entity/entity_admin';

@Controller('user-admin')
export class UserAdminController extends BaseController<UserAdmin, UserAdminDto, UserAdminDto>{
  dtoClassCreate(): new () => UserAdminDto {
    return UserAdminDto;
  }
  dtoClassUpdate(): new () => UserAdminDto {
    return UserAdminDto;
  }

  constructor(private _service: UserAdminService) {
    super(_service)
  }
}
