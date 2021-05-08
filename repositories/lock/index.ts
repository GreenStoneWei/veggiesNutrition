import IORedis from 'ioredis'
import RedLock from 'redlock'

export interface Lock {
  name: string
  lock: RedLock.Lock
}
export class LockManager {
  lock: RedLock

  constructor(client: IORedis.Redis) {
    this.lock = this.initRedisLock(client)
  }

  /**
   * @param ttl in seconds
   */
  async acquireLock(lockName: string, ttl: number): Promise<Lock> {
    try {
      const lock = await this.lock.acquire(lockName, ttl)
      return {
        name: lockName,
        lock
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async releaseLock(lockInstance: Lock) {
    try {
      await this.lock.release(lockInstance.lock)
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async extendLock(lockInstance: Lock, ttl: number) {
    await this.lock.extend(lockInstance.lock, ttl)
  }

  private initRedisLock(client: IORedis.Redis): RedLock {
    const lock = new RedLock([client], {
      retryCount: 10,
      retryDelay: 1000
    })
    lock.on('clientError', (error) => {
      console.error(error)
    })
    return lock
  }
}
