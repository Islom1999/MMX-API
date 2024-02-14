import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Unit } from "./unit";
import { Product } from "./product";

@Entity('product_unit')
export class ProductUnit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  coefficient: number;
  
  @Column({nullable: true})
  unit_id?: string;
  
  @ManyToOne(() => Unit, (unit) => unit.product_unit)
  @JoinColumn({ name: 'unit_id' })
  unit: Unit;

  @ManyToOne(() => Product, (product) => product.category)
  products: Product;
}