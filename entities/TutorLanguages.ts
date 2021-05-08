import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Languages } from './Languages'
import { Tutors } from './Tutors'

@Entity()
export class TutorLanguages {
  @PrimaryGeneratedColumn({
    type: 'int'
  })
  id: number

  @Column({
    type: 'int'
  })
  tutorId: number

  @Column({
    type: 'int'
  })
  languageId: number

  @ManyToOne(() => Tutors)
  @JoinColumn({
    name: 'tutorId'
  })
  tutor: Tutors

  @ManyToOne(() => Languages)
  @JoinColumn({
    name: 'languageId'
  })
  language: Languages
}
