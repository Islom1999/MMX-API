import { HttpException, HttpStatus } from '@nestjs/common';
import { DatabaseConnectionProvider } from 'src/database';
import {
  DeepPartial,
  FindOptionsWhere,
  Repository,
} from 'typeorm';

export abstract class BaseClientService<M extends {id:string}, C, U> {
  protected repository: Repository<M>;

  constructor(
    private dbConnectionProvider: DatabaseConnectionProvider,
    private entity: new () => M,
  ) {}

  private async init() {
    const connection = await this.dbConnectionProvider.getConnection();
    this.repository = connection.getRepository(this.entity);
  }

  async create(data: C): Promise<M> {
    await this.init();
    const _data = data as DeepPartial<M>;
    const new_model = this.repository.create(_data);
    const model = await this.repository.save(new_model);
    return model;
  }

  async findAll(): Promise<M[]> {
    await this.init();
    const model = await this.repository.find();
    return model;
  }

  async findOne(id: string): Promise<M | undefined> {
    await this.init();
    const model = await this.repository.findOne({
      where: { id } as FindOptionsWhere<M>,
    });
    if (!model)
      throw new HttpException("Couldn't find model", HttpStatus.NOT_FOUND);
    return model;
  }

  async update(id: string, data: U): Promise<M> {
    await this.init();
    await this.repository.update(id, data as any);
    const model = await this.repository.findOne({
      where: { id } as FindOptionsWhere<M>,
    });
    if (!model)
      throw new HttpException("Couldn't find model", HttpStatus.NOT_FOUND);
    return model;
  }

  async delete(id: string): Promise<M> {
    await this.init();
    const model = await this.repository.findOne({
      where: { id } as FindOptionsWhere<M>,
    });
    if (!model)
      throw new HttpException('Not found model', HttpStatus.NOT_FOUND);
    await this.repository.delete(id);
    return model;
  }
}
