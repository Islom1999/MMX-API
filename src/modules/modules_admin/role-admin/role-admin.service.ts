import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base';
import { RoleAdminDto } from './dto/role-admin.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleAdmin } from 'src/entity/entity_admin';

@Injectable()
export class RoleAdminService extends BaseService<RoleAdmin, RoleAdminDto, RoleAdminDto> {
    constructor(
        @InjectRepository(RoleAdmin)
        private _roleRepo: Repository<RoleAdmin>,  
    ){
        super(_roleRepo)
    }
}
