import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Contragent } from "./contragent";

@Entity('passport_data')
export class PassportData {
  @PrimaryColumn()
  id: string;

  @Column()
  inn: string;

  @Column()
  passport_seriya: string;

  @Column()
  address: string;

  @Column()
  contragent_id: string;

  @OneToMany(() => Contragent, (contragent) => contragent.passport_data)
  contragent: Contragent[];
}
