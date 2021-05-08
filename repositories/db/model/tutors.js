'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.ModelTutors = void 0
const Tutors_1 = require('../../../entities/Tutors')
class ModelTutors {
  constructor(client) {
    this.client = client
  }
  async getByLanguageSlug(language) {
    try {
      const data = await this.client
        .getRepository(Tutors_1.Tutors)
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
exports.ModelTutors = ModelTutors
//# sourceMappingURL=tutors.js.map
