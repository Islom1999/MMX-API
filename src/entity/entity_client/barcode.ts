import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product";
import { ProductUnit } from "./product_unit";
import { Barcode_Type } from "src/common";

@Entity('barcode')
export class Barcode {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  barcode: string;

  @Column({
    type: 'enum',
    enum: Barcode_Type,
  })
  barcode_type: Barcode_Type

  @Column()
  product_id: string;

  @Column()
  product_unit_id: string;

  @ManyToOne(() => Product, (product) => product.barcode)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @ManyToOne(() => ProductUnit, (product_unit) => product_unit.barcode)
  @JoinColumn({ name: 'product_unit_id' })
  product_unit: ProductUnit;
}
  