import { Request, Response, NextFunction } from 'express'
import { LockManager } from '../../../repositories/lock'
import redis from '../../../repositories/cache/redis'
import * as service from '../service'

const LOCK_TTL = 5 // in seconds
const lockManager = new LockManager(redis.getClient())

export const getBySlug: (req: Request, res: Response, next: NextFunction) => any = async (req, res, next) => {
  let lock
  try {
    const tutorSlug = req.params.tutorSlug
    // lock = await lockManager.acquireLock(tutorSlug, LOCK_TTL)
    const data = await service.getTutorBySlug(tutorSlug)
    res.send({ data })
  } catch (error) {
    next(error)
  } finally {
    if (lock) await lockManager.releaseLock(lock)
  }
}
