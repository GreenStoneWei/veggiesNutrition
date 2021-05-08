import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class TutorLessonPrices {
  @PrimaryGeneratedColumn({
    type: 'int'
  })
  id: number

  @Column({
    type: 'int'
  })
  tutorId: number

  @Column({
    type: 'double precision'
  })
  trialPrice: number

  @Column({
    type: 'double precision'
  })
  normalPrice: number
}
