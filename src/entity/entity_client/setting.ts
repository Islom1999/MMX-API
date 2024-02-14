import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Currency } from './currency';

@Entity('settings')
export class Settings {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  // One-to-many relationship with Currency
  @OneToMany(() => Currency, (currency) => currency.settings)
  currencies: Currency[];
}
