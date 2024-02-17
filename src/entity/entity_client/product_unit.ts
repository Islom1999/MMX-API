import { Column, Double, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Unit } from "./unit";
import { Product } from "./product";
import { Barcode } from "./barcode";

@Entity('product_unit')
export class ProductUnit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column('float')
  coefficient: number;
  
  @Column()
  unit_id: string;
  
  @ManyToOne(() => Unit, (unit) => unit.product_unit)
  @JoinColumn({ name: 'unit_id' })
  unit: Unit;

  @OneToMany(() => Product, (product) => product.product_unit) 
  products: Product[];

  @OneToMany(() => Barcode, (barcode) => barcode.product_unit)
  barcode: Barcode[];
}