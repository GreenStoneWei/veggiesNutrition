import config from 'config'
import moment from 'moment'
import db from '../../../repositories/db'
import { get, set } from '../../../repositories/cache/redis/checkCache'
import { LanguageSlug } from '../../../infra/enums/languages'
import { Tutors } from '../../../entities/Tutors'

export interface CacheData {
  timestamp: string
  data: ReturnType<typeof tranformToResponse>
}

export async function getTutorsBySlug(languageSlug: LanguageSlug) {
  const expirationDay = getExpirationDayByLanguageSlug(languageSlug)
  const cache = await checkIfCacheExists(languageSlug)

  let data: ReturnType<typeof tranformToResponse> = []

  if (!cache) {
    data = await refreshCache(languageSlug)
  } else {
    data = await getFromCache(cache, expirationDay, languageSlug)
  }
}

function getExpirationDayByLanguageSlug(languageSlug: LanguageSlug): number {
  switch (languageSlug) {
    case LanguageSlug.english:
      return config.get(`cache.expirationDays.${LanguageSlug.english}`)
    case LanguageSlug.chinsese:
      return config.get(`cache.expirationDays.${LanguageSlug.chinsese}`)
    case LanguageSlug.japanese:
      return config.get(`cache.expirationDays.${LanguageSlug.japanese}`)
    default:
      throw new Error(`Invalid languageSlug ${languageSlug}`)
  }
}

async function checkIfCacheExists(languageSlug: LanguageSlug) {
  return get(languageSlug)
}

async function refreshCache(languageSlug: LanguageSlug) {
  const rawData = await db.tutor.getByLanguageSlug(languageSlug)
  const data = tranformToResponse(rawData)
  // using floating promise not to block response
  set(languageSlug, { timestamp: new Date().toISOString(), data }).catch(console.error)
  return data
}

async function getFromCache(cache: CacheData, expirationDay: number, languageSlug: LanguageSlug) {
  if (isCacheExpired(cache.timestamp, expirationDay)) {
    await refreshCache(languageSlug)
  }
  return cache.data
}

function isCacheExpired(_timestamp: string, expirationDay: number): boolean {
  const now = new Date() // consider expiration definition and may be using .startOf()
  const timestamp = new Date(_timestamp)
  if (moment(now).diff(timestamp, 'd') > expirationDay) {
    return true
  }
  return false
}

function tranformToResponse(tutors: Tutors[]) {
  return tutors.map((tutor) => {
    return {
      id: tutor.id,
      slug: tutor.slug,
      name: tutor.name,
      headline: tutor.headline,
      introduction: tutor.introduction,
      price_info: {
        trial: tutor.priceInfo.trialPrice,
        normal: tutor.priceInfo.normalPrice
      },
      teaching_languages: tutor.teachingLanguages.map((l) => l.id)
    }
  })
}
