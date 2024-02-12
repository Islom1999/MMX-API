import { Controller } from '@nestjs/common';
import { UserClientService } from './user-client.service';
import { BaseController } from 'src/base';
import { UserClientDto } from './dto/user-client.dto';
import { UserClient } from 'src/entity/entity_admin';

@Controller('user-client')
export class UserClientController extends BaseController<UserClient, UserClientDto, UserClientDto> {
  dtoClassCreate(): new () => UserClientDto {
    return UserClientDto;
  }
  dtoClassUpdate(): new () => UserClientDto {
    return UserClientDto;
  }

  constructor(private _service: UserClientService) {
    super(_service)
  }
}
