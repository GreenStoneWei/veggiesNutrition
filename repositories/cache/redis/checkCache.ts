import redis from './index'
import { LanguageSlug } from '../../../infra/enums/languages'
import { CacheData } from '../../../api/tutors/service'
const PREFIX = 'TutorsAPI:tutors:'

export async function set(key: string, data: any) {
  try {
    return redis.getClient().set(`${PREFIX}:${key}`, JSON.stringify(data))
  } catch (error) {
    throw new Error(error)
  }
}

export async function get(key: string): Promise<CacheData> {
  try {
    const result = await redis.getClient().get(`${PREFIX}:${key}`)
    return result ? JSON.parse(result) : null
  } catch (error) {
    throw new Error(error)
  }
}
