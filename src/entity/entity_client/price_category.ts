import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { SaleObject } from "./sale_object";
import { KassaGroup } from "./kassa_group";

@Entity('price_category')
export class PriceCategory {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  is_buying: boolean;

  @ManyToOne(() => SaleObject, (sale_object) => sale_object.price_category)
  sale_object: SaleObject;

  @OneToMany(() => KassaGroup, kassa => kassa.price_category)
  kassa_group: KassaGroup[];
}

