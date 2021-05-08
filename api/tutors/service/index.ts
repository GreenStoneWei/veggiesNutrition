import { LanguageSlug, CacheStrategy } from '../../../infra/enums/languages'
import { TutorsStrategy, getCacheStrategy } from '../../factory'

export async function getTutorsBySlug(languageSlug: LanguageSlug) {
  const tutors = getCacheStrategy(CacheStrategy.tutors) as TutorsStrategy
  const expirationDay = tutors.getExpirationDay(languageSlug)
  const cache = await tutors.checkIfCacheExists(languageSlug)

  let data

  if (!cache) {
    data = await tutors.refreshCache(languageSlug)
  } else {
    data = await tutors.getFromCache(cache, expirationDay, languageSlug)
  }
  return data
}
