import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from 'typeorm'
import { TutorLanguages } from './TutorLanguages'

@Unique('uniqueLanguageSlug', ['slug'])
@Entity()
export class Languages {
  @PrimaryGeneratedColumn({
    type: 'int'
  })
  id: number

  @Column({
    type: 'varchar',
    length: 30
  })
  slug: string

  @OneToMany(() => TutorLanguages, (tutorLanguage) => tutorLanguage.language)
  tutorLanguages: TutorLanguages[]
}
