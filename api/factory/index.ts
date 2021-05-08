import config from 'config'
import { CacheStrategy, LanguageSlug } from '../../infra/enums/languages'
import { set, get } from '../../repositories/cache/redis/checkCache'
import db from '../../repositories/db'
import { Tutors } from '../../entities/Tutors'
import moment from 'moment'
type DB = typeof db

interface ResponseTutor {
  id: string
  slug: string
  name: string
  headline: string
  introduction: string
  price_info: {
    trial: number
    normal: number
  }
  teaching_languages: number[]
}
export interface CacheData {
  timestamp: string
  data: ResponseTutor | ResponseTutor[]
}

class TutorsCacheStrategy {
  constructor() {}

  async checkIfCacheExists(slug: LanguageSlug | string) {
    return get(slug)
  }

  async refreshCache(slug: string): Promise<any> {
    throw new Error()
  }

  async getFromCache(cache: CacheData, expirationDay: number, slug: string) {
    if (this.isCacheExpired(cache.timestamp, expirationDay)) {
      await this.refreshCache(slug)
    }
    return cache.data
  }

  getExpirationDay(slug?: string): number {
    throw new Error()
  }

  isCacheExpired(_timestamp: string, expirationDay: number): boolean {
    const now = new Date() // consider expiration definition and may be using .startOf()
    const timestamp = new Date(_timestamp)
    if (moment(now).diff(timestamp, 'd') > expirationDay) {
      return true
    }
    return false
  }

  tranformToResponse(tutor: Tutors) {
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
  }
}

export class TutorsStrategy extends TutorsCacheStrategy {
  db: DB
  constructor(dbInstance: DB) {
    super()
    this.db = dbInstance
  }

  async refreshCache(slug: LanguageSlug) {
    const rawData = await this.db.tutor.getByLanguageSlug(slug)
    const data = rawData.map(this.tranformToResponse)
    // using floating promise not to block response
    set(slug, { timestamp: new Date().toISOString(), data }).catch(console.error)
    return data
  }

  getExpirationDay(languageSlug: LanguageSlug): number {
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
}

export class TutorStrategy extends TutorsCacheStrategy {
  db: DB
  constructor(dbInstance: DB) {
    super()
    this.db = dbInstance
  }

  async refreshCache(tutorSlug: string) {
    const rawData = await this.db.tutor.getByTutorSlug(tutorSlug)
    if (!rawData) throw new Error('NOT_FOUND')
    const data = this.tranformToResponse(rawData)
    // using floating promise not to block response
    set(tutorSlug, { timestamp: new Date().toISOString(), data }).catch(console.error)
    return data
  }

  getExpirationDay(): number {
    return config.get('cache.tutor')
  }
}

export function getCacheStrategy(resource: CacheStrategy) {
  switch (resource) {
    case CacheStrategy.tutors:
      return new TutorsStrategy(db)
    case CacheStrategy.tutor:
      return new TutorStrategy(db)
    default:
      throw new Error()
  }
}
