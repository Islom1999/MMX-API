import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductUnit } from "./product_unit";
import { Category } from "./category";

@Entity('unit')
export class Unit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  full_name: string;

  @Column({ unique: true })
  global_name: string;

  @OneToMany(() => Category, (category) => category.unit)
  category: Category[];

  @OneToMany(() => ProductUnit, (product_unit) => product_unit.unit)
  product_unit: ProductUnit[];
}
