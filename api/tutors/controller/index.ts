import { Request, Response, NextFunction } from 'express'
import { LanguageSlug } from '../../../infra/enums/languages'
import { LockManager } from '../../../repositories/lock'
import redis from '../../../repositories/cache/redis'
import * as service from '../service'

const LOCK_TTL = 5 // in seconds
const lockManager = new LockManager(redis.getClient())

export const getTutors: (req: Request, res: Response, next: NextFunction) => any = async (req, res, next) => {
  let lock
  try {
    const languageSlug = req.params.languageSlug
    if (!Object.keys(LanguageSlug).includes(languageSlug)) {
      throw new Error('language not found')
    }
    lock = await lockManager.acquireLock(languageSlug, LOCK_TTL)
    const data = await service.getTutorsBySlug(languageSlug as LanguageSlug)

    res.send({ data })
  } catch (error) {
    next(error)
  } finally {
    if (lock) await lockManager.releaseLock(lock)
  }
}
