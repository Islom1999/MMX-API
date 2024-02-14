import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { KassaGroup } from "./kassa_group";

@Entity()
export class Kassa {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  isActive: boolean;

  @Column()
  isGroup: boolean;

  @ManyToOne(() => KassaGroup, (groupKassa) => groupKassa.kassa)
  group: KassaGroup;
}
