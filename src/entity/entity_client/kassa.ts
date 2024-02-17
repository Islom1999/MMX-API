import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Kassa {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  is_active: boolean;

  @Column()
  is_group: boolean;

  // @ManyToOne(() => KassaGroup, (groupKassa) => groupKassa.kassa)
  // group: KassaGroup;
}
