import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from 'typeorm'
import { TutorLanguages } from './TutorLanguages'

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

  @OneToMany(() => TutorLanguages, (tutorLanguage) => tutorLanguage.language)
  tutorLanguages: TutorLanguages[]
}
