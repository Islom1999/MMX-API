import { Column, Entity, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Contragent } from "./contragent";

@Entity('passport_data')
export class PassportData {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  inn: string;

  @Column()
  passport_seriya: string;

  @Column()
  address: string;

  @OneToOne(() => Contragent, (contragent) => contragent.passport_data)
  contragent: Contragent[];
}
