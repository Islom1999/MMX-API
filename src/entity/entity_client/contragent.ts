import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { PassportData } from './passport_data';
import { BankAccount } from './bank_account';
import { Contract } from './contract';
import { Contragent_Status, Contragent_Type } from 'src/common';

@Entity('contragent')
export class Contragent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: Contragent_Type,
  })
  contragent_type: Contragent_Type;

  @Column({
    type: 'enum',
    enum: Contragent_Status,
  })
  contragent_status: Contragent_Status;

  @Column()
  passport_data_id : string

  @Column()
  bank_account_id : string

  @OneToMany(() => Contract, (contract) => contract.contragent)
  contracts: Contract[];

  @OneToOne(() => PassportData, (passportData) => passportData.contragent)
  @JoinColumn({name: 'passport_data_id'})
  passport_data: PassportData;

  @OneToOne(() => BankAccount, (bankAccount) => bankAccount.contragent)
  @JoinColumn({name: 'bank_account_id'})
  bank_account: BankAccount[];
}
