import {
  Entity,
  Column,
  ManyToOne,
  PrimaryColumn,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Contragent } from './contragent';
import { Currency } from './currency';
import { Contract_Type } from 'src/common';

@Entity('contract')
export class Contract {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column()
  number: string;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column({
    type: 'enum',
    enum: Contract_Type
  })
  contract_type: Contract_Type;

  @Column()
  contragent_id: string;

  @Column()
  currency_id: string;

  @ManyToOne(() => Contragent, (contragent) => contragent.contracts)
  @JoinColumn({ name: 'contragent_id' })
  contragent: Contragent;

  @ManyToOne(() => Currency, (currency) => currency.contract)
  @JoinColumn({ name: 'currency_id' })
  currency: Currency;
}
