import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany, OneToOne } from 'typeorm'
import { TutorLanguages } from './TutorLanguages'
import { TutorLessonPrices } from './TutorLessonPrices'
@Unique('uniqueTutorSlug', ['slug'])
@Entity()
export class Tutors {
  @PrimaryGeneratedColumn({
    type: 'int'
  })
  id: number

  @Column({
    type: 'varchar',
    length: 50
  })
  slug: string

  @Column({
    type: 'varchar',
    length: 50
  })
  name: string

  @Column({
    type: 'varchar',
    length: 100
  })
  headline: string

  @Column({
    type: 'text'
  })
  introduction: string

  @OneToOne(() => TutorLessonPrices, (tutorLessonPrice) => tutorLessonPrice.tutor)
  priceInfo: TutorLessonPrices

  @OneToMany(() => TutorLanguages, (tutorLanguage) => tutorLanguage.language)
  teachingLanguages: TutorLanguages[]
}
