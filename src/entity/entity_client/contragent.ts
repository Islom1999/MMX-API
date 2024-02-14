import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { PassportData } from './passport_data';
import { BankAccount } from './bank_account';
import { Contract } from './contract';

@Entity('contragent')
export class Contragent {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: ['client', 'supplier', 'both'],
  })
  type: string;

  @Column({
    type: 'enum',
    enum: ['yuridik', 'jismoniy'],
  })
  status: string;

  @OneToMany(() => Contract, (contract) => contract.contragent)
  contracts: Contract[];

  @OneToMany(() => PassportData, (passportData) => passportData.contragent)
  passport_data: PassportData[];

  @OneToMany(() => BankAccount, (bankAccount) => bankAccount.contragent)
  bank_account: BankAccount[];
}
