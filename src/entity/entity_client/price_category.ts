import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('price_category')
export class PriceCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  is_buying: boolean;

  // @ManyToOne(() => SaleObject, (sale_object) => sale_object.price_category)
  // sale_object: SaleObject;

  // @OneToMany(() => KassaGroup, kassa => kassa.price_category)
  // kassa_group: KassaGroup[];
}

