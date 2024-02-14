import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Unit } from "./unit";
import { Product } from "./product";

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  use_characteristic :boolean

  @Column()
  unit_id: string;
  
  @ManyToOne(() => Unit, (unit) => unit.product_unit)
  @JoinColumn({ name: 'unit_id' })
  unit: Unit;

  @ManyToOne(() => Product, (product) => product.category)
  products: Product;
}