import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base';
import { Repository } from 'typeorm';
import { UserClientDto } from './dto/user-client.dto';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { UserClient } from 'src/entity/entity_admin';

@Injectable()
export class UserClientService extends BaseService<UserClient, UserClientDto, UserClientDto> {
    salt = 10

    constructor(
        @InjectRepository(UserClient)
        private _userRepo: Repository<UserClient>,
        private config: ConfigService,  
    ){
        super(_userRepo)
    }

    override async create(data: UserClientDto): Promise<UserClient> {
        const hash = await bcrypt.hash(data.password, this.salt);
        delete data.password
        const new_model = this._userRepo.create({...data, hash});
        const model = await this._userRepo.save(new_model);
        return model
    }

    override async update(id: string, data: UserClientDto): Promise<UserClient> {
        const hash = await bcrypt.hash(data.password, this.salt);
        delete data.password
        await this._userRepo.update(id, {...data, hash});
        const model = await this._userRepo.findOne({ where: { id }});
        if(!model) throw new HttpException("Couldn't find model", HttpStatus.NOT_FOUND)
        return model
    }

}
