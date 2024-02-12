import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('unit')
export class Unit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;
}
