import { LanguageSlug, CacheStrategy } from '../../../infra/enums/languages'
import { TutorsStrategy, getCacheStrategy } from '../../factory'
import redis from '../../../repositories/cache/redis'

import { LockManager } from '../../../repositories/lock'

const lockManager = new LockManager(redis.getClient())
const TTL = 5

export async function getTutorsBySlug(languageSlug: LanguageSlug) {
  const tutors = getCacheStrategy(CacheStrategy.tutors) as TutorsStrategy
  const expirationDay = tutors.getExpirationDay(languageSlug)
  const cache = await tutors.checkIfCacheExists(languageSlug)

  let data

  if (!cache) {
    const lock = await lockManager.acquireLock(languageSlug, TTL)
    const cacheData = await tutors.checkIfCacheExists(languageSlug)
    if (cacheData) {
      await lockManager.releaseLock(lock)
      return cacheData
    }
    data = await tutors.refreshCache(languageSlug)
    await lockManager.releaseLock(lock)
  } else {
    data = await tutors.getFromCache(cache, expirationDay, languageSlug)
  }
  return data
}
