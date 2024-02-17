import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Contragent } from "./contragent";

@Entity('bank_account')
export class BankAccount {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  mfo: string;

  @Column()
  account_number: string;

  @OneToOne(() => Contragent, (contragent) => contragent.passport_data)
  contragent: Contragent;
}
