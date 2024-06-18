import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PatientEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: number;

  @Column({ type: 'longtext' })
  photo: string;
}
