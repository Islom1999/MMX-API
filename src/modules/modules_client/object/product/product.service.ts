import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BaseClientService } from 'src/base';
import { DatabaseConnectionProvider } from 'src/database';
import { Product } from 'src/entity/entity_client';
import { ProductCreateDto, ProductUpdateDto } from './dto/product.dto';
import { EntityRepository, Repository, TreeRepository } from 'typeorm';
import { ProductGroupCreateDto, ProductGroupUpdateDto } from './dto/product-group.dto';

@Injectable()
export class ProductService {
    constructor(private _dbConnectionProvider: DatabaseConnectionProvider) {}

    _repository:Repository<Product>
    _treeRepository:TreeRepository<Product>

    private async initRepo() {
        const connection = await this._dbConnectionProvider.getConnection();
        this._treeRepository = connection.getTreeRepository(Product); 
        this._repository = connection.getRepository(Product);
    }

    async createProduct(data: ProductCreateDto): Promise<Product> {
        await this.initRepo();
        const { group_id } = data

        const parent = await this._treeRepository.findOne({ where: { id: group_id } })
    
        if(!parent)
            throw new HttpException('not found parent', HttpStatus.BAD_REQUEST)

        const new_model = this._treeRepository.create({...data, is_group: false, parent});
        const model = await this._treeRepository.save(new_model);
        return model;
    }

    async createGroup(data: ProductGroupCreateDto): Promise<Product> {
        await this.initRepo();
        const { group_id } = data

        let parent: Product

        if(group_id){
            parent = await this._treeRepository.findOne({ where: { id: group_id } })
    
            if(!parent)
                throw new HttpException('not found parent', HttpStatus.BAD_REQUEST)
        }


        const new_model = this._treeRepository.create({ ...data, is_group: true, parent });
        const model = await this._treeRepository.save(new_model);
        return model;
    }

    async findAllProduct(): Promise<Product[]> {
        await this.initRepo();
        const allProductsTree = await this._treeRepository.findTrees();
        return allProductsTree
    }

    async findOne(id: string): Promise<Product> {
        await this.initRepo();
        const model = await this._treeRepository.findOne({
          where: { id },
        });
        const modelTree = await this._treeRepository.findDescendantsTree(model);
        if (!model)
          throw new HttpException("Couldn't find model", HttpStatus.NOT_FOUND);

        return modelTree;
    }

    async updateGroup(id:string, data: ProductGroupUpdateDto): Promise<Product> {
        await this.initRepo();
       
        const { group_id } = data

        let parent: Product

        if(group_id){
            parent = await this._repository.findOne({ where: { id: group_id } })
    
            if(!parent)
                throw new HttpException('not found parent', HttpStatus.BAD_REQUEST)
        }
            
        await this._treeRepository.update({id, is_group: true}, {...data});

        const model = await this._treeRepository.findOne({
            where: { id }
        });
        if (!model)
            throw new HttpException("Couldn't find model", HttpStatus.NOT_FOUND);

        model.parent = parent
        Object.assign(model, data);

        const model_update = await this._treeRepository.save(model);
        
        return model_update;
    }

    async updateProduct(id:string, data: ProductUpdateDto): Promise<Product> {
        await this.initRepo();
        await this._treeRepository.update({id, is_group: true}, data);

        const model = await this._treeRepository.findOne({
            where: { id, is_group: false }
        });
        if (!model)
            throw new HttpException("Couldn't find model", HttpStatus.NOT_FOUND);

        return model;
    }

    async delete(id: string): Promise<Product> {
        await this.initRepo();
        const model = await this._treeRepository.findOne({
          where: { id } 
        });
        if (!model)
          throw new HttpException('Not found model', HttpStatus.NOT_FOUND);
        await this._treeRepository.delete(id);
        return model;
    }
}
