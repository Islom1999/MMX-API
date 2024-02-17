import {
  Entity,
  PrimaryColumn,
  Column,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable,
  JoinColumn,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Kassa } from './kassa';
import { Currency } from './currency';
import { Warehouse } from './warehouse';
import { SaleObject } from './sale_object';
import { ProductUnit } from './product_unit';
import { PriceCategory } from './price_category';

@Entity('kassa_group')
export class KassaGroup {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  is_active: boolean;

  @Column()
  is_group: boolean;

  @Column()
  group_id: string;

  @ManyToOne(() => KassaGroup, (item) => item.children)
  @JoinColumn({name: 'group_id'})
  group: KassaGroup;

  @OneToMany(() => KassaGroup, (item) => item.group)
  children: KassaGroup[];

  // @OneToMany(() => Kassa, kassa => kassa.group)
  // kassa: Kassa[];

  // @ManyToOne(() => PriceCategory, price_category => price_category.kassa_group)
  // price_category: PriceCategory;

  // @ManyToOne(() => Warehouse, warehouse => warehouse.kassa_group)
  // warehouse: Warehouse;

  // @ManyToOne(() => SaleObject, saleObject => saleObject.kassa_group)
  // sale_object: SaleObject;

  // @ManyToMany(() => ProductUnit)
  // @JoinTable()
  // units: ProductUnit[];
}