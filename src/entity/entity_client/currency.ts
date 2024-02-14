import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { Settings } from './setting';
import { Contract } from './contract';

@Entity()
export class Currency {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Settings, settings => settings.currencies)
  settings: Settings;

  @ManyToOne(() => Contract, contract => contract.currency)
  contract: Contract;
}
