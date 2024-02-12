import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BaseService } from 'src/base';
import { UserAdminDto } from './dto/user-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { UserAdmin } from 'src/entity/entity_admin';

@Injectable()
export class UserAdminService extends BaseService<UserAdmin, UserAdminDto, UserAdminDto> {
    salt = 10

    constructor(
        @InjectRepository(UserAdmin)
        private _userRepo: Repository<UserAdmin>,  
        private config: ConfigService,
    ){
        super(_userRepo)
    }

    override async create(data: UserAdminDto): Promise<UserAdmin> {
        const hash = await bcrypt.hash(data.password, this.salt);
        delete data.password
        const new_model = this._userRepo.create({...data, hash});
        const model = await this._userRepo.save(new_model);
        return model
    }

    override async update(id: string, data: UserAdminDto): Promise<UserAdmin> {
        const hash = await bcrypt.hash(data.password, this.salt);
        delete data.password
        await this._userRepo.update(id, {...data, hash});
        const model = await this._userRepo.findOne({ where: { id }});
        if(!model) throw new HttpException("Couldn't find model", HttpStatus.NOT_FOUND)
        return model
    }



}
