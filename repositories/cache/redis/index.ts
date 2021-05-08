import config from 'config'
import IORedis from 'ioredis'

class RedisService {
  private _redis: IORedis.Redis

  constructor() {}

  init() {
    this._redis = new IORedis({
      ...config.get('redis'),
      lazyConnect: true,
      retryStrategy: () => 3000,
      maxRetriesPerRequest: 0,
      autoResendUnfulfilledCommands: false
    })
  }

  getClient() {
    return this._redis
  }

  async checkConnection() {
    return new Promise((resolve, reject) => {
      let counter = 0
      const timer = setInterval(async () => {
        const result = await this._redis.ping()
        if (result === 'PONG') {
          clearInterval(timer)
          resolve(undefined)
        }
        counter++
        if (counter > 10) {
          clearInterval(timer)
          reject('Cannot connect to Redis')
        }
      }, 1000) // ms
    })
  }
}

export = new RedisService()
