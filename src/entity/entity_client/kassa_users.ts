import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Currency } from './currency';
import { Warehouse } from './warehouse';
import { SaleObject } from './sale_object';
import { ProductUnit } from './product_unit';

@Entity('kassa_users')
export class KassaUsers {
  @PrimaryColumn()
  id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  middle_name: string;

  @Column()
  birth_date: Date;

  @Column()
  sex: string;

  @Column()
  password: string;

  @Column()
  bar_code: string;

  @Column()
  image: string;

  @Column()
  is_block: boolean;

  @Column()
  address: string;

//   @ManyToOne(() => Currency, (currency) => currency.kassa_users)
//   price_category: Currency;

//   @ManyToOne(() => Warehouse, (warehouse) => warehouse.kassa_users)
//   warehouse: Warehouse;

//   @ManyToOne(() => SaleObject, (saleObject) => saleObject.kassa_users)
//   sale_object: SaleObject;

  // One-to-many relationship with Assets
//   @ManyToOne(() => Assets, (assets) => assets.userKassas)
//   assets: Assets;

//   @ManyToMany(() => ProductUnit)
//   @JoinTable()
//   units: ProductUnit[];
}

