import { Request, Response, NextFunction } from 'express'
import { LanguageSlug } from '../../../infra/enums/languages'
import { LockManager } from '../../../repositories/lock'
import redis from '../../../repositories/cache/redis'
import * as service from '../service'
const lockManager = new LockManager(redis.getClient())

export const getTutors: (req: Request, res: Response, next: NextFunction) => any = async (req, res, next) => {
  try {
    if (!Object.keys(LanguageSlug).includes(req.params.languageSlug)) {
      throw new Error('language not found')
    }
    const data = await service.getTutorsBySlug(req.params.languageSlug as LanguageSlug)
    res.send({ data })
  } catch (error) {
    next(error)
  }
}
