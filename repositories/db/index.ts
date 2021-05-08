import { Connection, ConnectionOptions, createConnection } from 'typeorm'
import { ModelTutors } from './model/tutors'

interface DbConfig {
  name: string
  type: 'postgres'
  host: string
  port: number
  database: string
  username: string
  password: string
  schema: string
  entities?: [string]
  redis?: {
    host: string
    password?: string
  }
}

class Rdb {
  config: DbConfig
  client: Connection
  tutor: ModelTutors

  async connect(config: DbConfig, opt: { needSync: boolean }) {
    this.config = {
      ...config,
      entities: ['entities/*.js'],
      type: 'postgres',
      name: 'hermes'
    }
    try {
      const connectionConfig: ConnectionOptions = {
        ...this.config
      }
      this.client = await createConnection(connectionConfig)
      if (opt.needSync === true) {
        await this.client.createQueryRunner().createSchema(<string>config.schema, true)
        await this.client.synchronize(true)
      }

      this.tutor = new ModelTutors(this.client)

      return this.client
    } catch (error) {
      throw error
    }
  }

  async checkConnection() {
    try {
      if (this.client !== undefined) {
        await this.client.query('SELECT 1')
        return true
      }
    } catch (error) {
      console.error(error)
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
