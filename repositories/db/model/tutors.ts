import { Connection } from 'typeorm'
import { Tutors } from '../../../entities/Tutors'
import { LanguageSlug } from '../../../infra/enums/languages'

export class ModelTutors {
  client: Connection

  constructor(client: Connection) {
    this.client = client
  }

  async getByLanguageSlug(language: LanguageSlug) {
    try {
      const data = await this.client
        .getRepository(Tutors)
        .createQueryBuilder('tutor')
        .select()
        .leftJoinAndSelect('tutor.teachingLanguages', 'language')
        .leftJoinAndSelect('tutor.priceInfo', 'priceInfo')
        .where('language = :language', { language })
        .getMany()
      return data
    } catch (error) {
      throw error
    }
  }
}
