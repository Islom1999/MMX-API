import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('warehouse')
export class Warehouse {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  // @OneToMany(() => KassaGroup, kassa => kassa.warehouse)
  // kassa_group: KassaGroup[];
}