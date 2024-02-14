import {
  Entity,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  PrimaryColumn,
  OneToMany,
} from 'typeorm';
import { Category } from './category';
import { ProductUnit } from './product_unit';

@Entity()
export class Product {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  full_name: string;

  @Column()
  is_group: boolean;

  // Self-referencing one-to-many relationship for groups
  @ManyToOne(() => Product, (product) => product.children)
  group: Product;

  @OneToMany(() => Product, (product) => product.group)
  children: Product[];

  // Many-to-one relationship to Category
  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  // Many-to-many relationship to ProductUnit
  @ManyToMany(() => ProductUnit, (productUnit) => productUnit.products)
  @JoinTable()
  units: ProductUnit[];
}