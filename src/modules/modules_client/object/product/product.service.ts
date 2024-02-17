import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BaseClientService } from 'src/base';
import { DatabaseConnectionProvider } from 'src/database';
import { Product } from 'src/entity/entity_client';
import { ProductCreateDto, ProductUpdateDto } from './dto/product.dto';
import { Repository } from 'typeorm';
import { ProductGroupCreateDto, ProductGroupUpdateDto } from './dto/product-group.dto';

@Injectable()
export class ProductService {
    constructor(private _dbConnectionProvider: DatabaseConnectionProvider) {}

    _repository:Repository<Product>

    private async initRepo() {
        const connection = await this._dbConnectionProvider.getConnection();
        this._repository = connection.getRepository(Product);
    }

    async createProduct(data: ProductCreateDto): Promise<Product> {
        await this.initRepo();
        const new_model = this._repository.create({...data, is_group: false});
        const model = await this._repository.save(new_model);
        return model;
    }

    async createGroup(data: ProductGroupCreateDto): Promise<Product> {
        await this.initRepo();
        const new_model = this._repository.create({...data, is_group: true});
        const model = await this._repository.save(new_model);
        return model;
    }

    async findAllProduct(): Promise<Product[]> {
        await this.initRepo();
        const model = await this._repository.find({
            relations: {
                children: true
            }
        });

        return model;
    }

    async findOne(id: string): Promise<Product> {
        await this.initRepo();
        const model = await this._repository.findOne({
          where: { id },
          relations: {
            children: true  
          }
        });
        if (!model)
          throw new HttpException("Couldn't find model", HttpStatus.NOT_FOUND);
        return model;
    }

    async updateGroup(id:string, data: ProductGroupUpdateDto): Promise<Product> {
        await this.initRepo();

        await this._repository.update({id, is_group: true}, data);

        const model = await this._repository.findOne({
            where: { id, is_group: true }
        });
        if (!model)
            throw new HttpException("Couldn't find model", HttpStatus.NOT_FOUND);
        
        return model;
    }

    async updateProduct(id:string, data: ProductUpdateDto): Promise<Product> {
        await this.initRepo();
        await this._repository.update({id, is_group: true}, data);

        const model = await this._repository.findOne({
            where: { id, is_group: false }
        });
        if (!model)
            throw new HttpException("Couldn't find model", HttpStatus.NOT_FOUND);

        return model;
    }

    async delete(id: string): Promise<Product> {
        await this.initRepo();
        const model = await this._repository.findOne({
          where: { id } 
        });
        if (!model)
          throw new HttpException('Not found model', HttpStatus.NOT_FOUND);
        await this._repository.delete(id);
        return model;
    }

    

}
