import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { KassaGroup } from "./kassa_group";

@Entity('warehouse')
export class Warehouse {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => KassaGroup, kassa => kassa.warehouse)
  kassa_group: KassaGroup[];
}