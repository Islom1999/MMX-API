import {
  Entity,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  PrimaryColumn,
  OneToMany,
  JoinColumn,
  PrimaryGeneratedColumn,
  Tree,
  TreeParent,
  TreeChildren,
} from 'typeorm';
import { Category } from './category';
import { ProductUnit } from './product_unit';
import { Barcode } from './barcode';

@Entity('product')
@Tree("closure-table")
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  full_name: string;

  @Column()
  is_group: boolean;

  @Column({nullable: true})
  group_id: string

  @Column()
  category_id: string

  @Column({nullable: true})
  product_unit_id: string

  @TreeParent()
  // @JoinColumn({name: 'group_id'})
  parent: Product;

  @TreeChildren()
  children: Product[]; 

  // Self-referencing one-to-many relationship for groups
  // @ManyToOne(() => Product, (product) => product.children)
  // @JoinColumn({name: 'group_id'})
  // group: Product;

  // @OneToMany(() => Product, (product) => product.group)
  // children: Product[];

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({name: 'category_id'})
  category: Category;

  @ManyToOne(() => ProductUnit, (productUnit) => productUnit.products)
  @JoinColumn({name: 'product_unit_id'})
  product_unit: ProductUnit;

  @OneToMany(() => Barcode, (barcode) => barcode.product)
  barcode: Barcode[];
}