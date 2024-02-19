import { Injectable } from '@nestjs/common';
import { BaseClientService } from 'src/base';
import { DatabaseConnectionProvider } from 'src/database';
import { Settings } from 'src/entity/entity_client';
import { Repository } from 'typeorm';
import { SettingsUpdateDto } from './dto/settings.dto';

@Injectable()
export class SettingService {
    constructor(private _dbConnectionProvider: DatabaseConnectionProvider) {}


    _repository:Repository<Settings>

    private async initRepo() {
        const connection = await this._dbConnectionProvider.getConnection();
        this._repository = connection.getRepository(Settings);
    }

    async getSetting(): Promise<Settings>{
        await this.initRepo()

        const setting = await this._repository.find()

        return setting[0]
    }

    async update(data: SettingsUpdateDto): Promise<Settings>{
        await this.initRepo()

        let setting = await this._repository.find()

        if(!setting[0]){
            const new_model = await this._repository.create({...data});
            const model = await this._repository.save(new_model);
        }

        await this._repository.update({}, data)

        setting = await this._repository.find()

        return setting[0]
    }


}
