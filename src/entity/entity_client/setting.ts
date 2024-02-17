import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { Currency } from './currency';

@Entity('settings')
export class Settings {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  currency_id: string

  @ManyToOne(() => Currency, (currency) => currency.settings)
  @JoinColumn({name: 'currency_id'})
  currency: Currency;
}
