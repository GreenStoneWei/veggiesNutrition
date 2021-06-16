import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class TNFD {
  @PrimaryGeneratedColumn({
    type: 'int'
  })
  id: number

  @Column({
    type: 'text'
  })
  foodCategory: string

  @Column({
    type: 'text'
  })
  dataCategory: string

  @Column({
    type: 'text'
  })
  idNum: string

  @Column({
    type: 'text'
  })
  name: string

  @Column({
    type: 'text'
  })
  otherName: string

  @Column({
    type: 'text'
  })
  analyzedCategory: string

  @Column({
    type: 'text'
  })
  analyzedItem: string

  @Column({
    type: 'text'
  })
  unit: string

  @Column({
    type: 'text'
  })
  qtyPerHundredGram: string
}
