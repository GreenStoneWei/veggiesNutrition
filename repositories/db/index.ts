import { Connection, ConnectionOptions, createConnection } from 'typeorm'

class Rdb {
  config: any // DbConfig
  client: Connection

  async connect(config: any, needSync: boolean) {
    this.config = {
      ...config,
      entities: ['entities/*.js'],
      type: 'postgres',
      name: 'hermes'
    }
    try {
      const connectionConfig: ConnectionOptions = {
        ...this.config,
        cache: this.config.redis
          ? {
              type: 'redis',
              options: {
                host: this.config.redis.host,
                password: this.config.redis.password || undefined,
                port: 6379
              }
            }
          : undefined
      }
      this.client = await createConnection(connectionConfig)
      if (needSync === true) {
        await this.client.createQueryRunner().createSchema(<string>config.schema, true)
        await this.client.synchronize(true)
      }

      // this.history = new ModelHistory(this.client, this.config.schema)

      return this.client
    } catch (error) {
      throw error
    }
  }

  async disconnect() {
    try {
      if (this.client !== undefined) await this.client.close()
    } catch (error) {
      throw error
    }
  }
}

export = new Rdb()
