import { Product } from "src/entity/entity_client";
import { EntityRepository, TreeRepository } from "typeorm";

@EntityRepository(Product)
export class ProductRepository extends TreeRepository<Product> {}