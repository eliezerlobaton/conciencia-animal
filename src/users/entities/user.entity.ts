import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  age: number

  @Column()
  password: string

  @Column({ unique: true })
  identity: string

  @Column({ unique: true })
  email: string

  @Column()
  phone: string

  @Column()
  address: string

  @Column()
  city: string

  @Column()
  state: string

}
