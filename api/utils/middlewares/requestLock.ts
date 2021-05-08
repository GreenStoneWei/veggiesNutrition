import { RequestHandler } from 'express'
import redis from '../../../repositories/cache/redis'
import { LockManager } from '../../../repositories/lock'

const lockManager = new LockManager(redis.getClient())

function lockHandler(lockName: string, ttl: number): RequestHandler {
  const setLock: RequestHandler = async (req, res, next) => {
    try {
      const lock = await lockManager.acquireLock(lockName, ttl)

      res.once('finish', async () => {
        await lockManager.releaseLock(lock)
      })

      next()
    } catch (error) {
      next(error)
    }
  }
  return setLock
}

export function lockRequest(controller: RequestHandler, lockName: string, ttl: number): RequestHandler[] {
  return [lockHandler(lockName, ttl), controller]
}
