import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleClientDto } from './dto/role-client.dto';
import { RoleClient } from 'src/entity/entity_admin';

@Injectable()
export class RoleClientService extends BaseService<RoleClient, RoleClientDto, RoleClientDto>{
    constructor(
        @InjectRepository(RoleClient)
        private _roleRepo: Repository<RoleClient>,  
    ){
        super(_roleRepo)
    }
}
