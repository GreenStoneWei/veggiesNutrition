import { CacheStrategy } from '../../../infra/enums/languages'
import { TutorStrategy, getCacheStrategy } from '../../factory'

export async function getTutorBySlug(tutorSlug: string) {
  const tutor = getCacheStrategy(CacheStrategy.tutor) as TutorStrategy

  const cache = await tutor.checkIfCacheExists(tutorSlug)
  const expirationDay = tutor.getExpirationDay()

  let data

  if (!cache) {
    data = await tutor.refreshCache(tutorSlug)
  } else {
    data = await tutor.getFromCache(cache, expirationDay, tutorSlug)
  }
  return data
}
