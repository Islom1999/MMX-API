import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductUnit } from "./product_unit";

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

  @OneToMany(() => ProductUnit, (product_unit) => product_unit.unit)
  product_unit: ProductUnit[];
}
