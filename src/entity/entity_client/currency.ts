import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Settings } from './setting';
import { Contract } from './contract';

@Entity()
export class Currency {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Settings, settings => settings.currency)
  settings: Settings;

  @OneToMany(() => Contract, contract => contract.currency)
  contract: Contract[];
}
