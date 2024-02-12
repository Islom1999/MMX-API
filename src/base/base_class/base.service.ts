import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DeepPartial, FindOptionsRelations, FindOptionsWhere, Repository } from 'typeorm';

// @Injectable()
export abstract class BaseService<M extends { id?: string }, D, U> {
    protected constructor(protected repository: Repository<M>) {}

    async create(data: any): Promise<M> {
        const _data = data as DeepPartial<M>
        const new_model = this.repository.create(_data);
        const model = await this.repository.save(new_model);
        return model
    }  

    async findAll(relations?:  FindOptionsRelations<M>): Promise<M[]> {
        const model = await this.repository.find();
        return model
    }

    async findOne(id: string): Promise<M | undefined> {
        const model = await this.repository.findOne({ where: { id } as FindOptionsWhere<M> });
        if(!model) throw new HttpException("Couldn't find model", HttpStatus.NOT_FOUND)
        return model
    }

    async update(id: string, data: U): Promise<M> {
        await this.repository.update(id, data as any);
        const model = await this.repository.findOne({ where: { id } as FindOptionsWhere<M> });
        if(!model) throw new HttpException("Couldn't find model", HttpStatus.NOT_FOUND)
        return model
    }

    async delete(id: string): Promise<M> {
        const model = await this.repository.findOne({ where: { id } as FindOptionsWhere<M> })
        if(!model) throw new HttpException('Not found model', HttpStatus.NOT_FOUND)
        await this.repository.delete(id);
        return model
    }
}
