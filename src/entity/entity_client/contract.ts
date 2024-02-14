import {
  Entity,
  Column,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Contragent } from './contragent';
import { Currency } from './currency';

@Entity('contract')
export class Contract {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  number: string;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column({
    type: 'enum',
    enum: ['supplier', 'client'],
  })
  type: string;

  @ManyToOne(() => Contragent, (contragent) => contragent.contracts)
  contragent: Contragent;

  @ManyToOne(() => Currency, (currency) => currency.contract)
  currency: Currency;
}
