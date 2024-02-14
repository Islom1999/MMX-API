import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { PriceCategory } from "./price_category";
import { KassaGroup } from "./kassa_group";

@Entity('sale_object')
export class SaleObject {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => PriceCategory, (priceCategory) => priceCategory.sale_object)
  price_category: PriceCategory;

  @OneToMany(() => KassaGroup, kassa => kassa.sale_object)
  kassa_group: KassaGroup[];
}
