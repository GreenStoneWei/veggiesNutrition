import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm'
import { Tutors } from './Tutors'
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

  @OneToOne(() => Tutors, (tutor) => tutor.priceInfo)
  @JoinColumn({
    name: 'tutorId'
  })
  tutor: Tutors
}
