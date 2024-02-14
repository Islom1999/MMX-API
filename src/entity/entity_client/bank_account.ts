import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Contragent } from "./contragent";

@Entity('bank_account')
export class BankAccount {
  @PrimaryColumn()
  id: string;

  @Column()
  mfo: string;

  @Column()
  account_number: string;

  @Column()
  contragent_id: string;

  @OneToMany(() => Contragent, (contragent) => contragent.passport_data)
  contragent: Contragent[];
}
