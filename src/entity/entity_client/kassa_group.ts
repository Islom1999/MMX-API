import {
  Entity,
  PrimaryColumn,
  Column,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable
} from 'typeorm';
import { Kassa } from './kassa';
import { Currency } from './currency';
import { Warehouse } from './warehouse';
import { SaleObject } from './sale_object';
import { ProductUnit } from './product_unit';
import { PriceCategory } from './price_category';

@Entity('kassa_group')
export class KassaGroup {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  isActive: boolean;

  @OneToMany(() => Kassa, kassa => kassa.group)
  kassa: Kassa[];

  @ManyToOne(() => PriceCategory, price_category => price_category.kassa_group)
  price_category: PriceCategory;

  @ManyToOne(() => Warehouse, warehouse => warehouse.kassa_group)
  warehouse: Warehouse;

  @ManyToOne(() => SaleObject, saleObject => saleObject.kassa_group)
  sale_object: SaleObject;

  @ManyToMany(() => ProductUnit)
  @JoinTable()
  units: ProductUnit[];
}