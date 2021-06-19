import { Connection, ConnectionOptions, createConnection } from 'typeorm'
import { ModelTNFD } from './model/tfnd'
import { ModelFoodCategory } from './model/foodCategories'

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
  foodCategory: ModelFoodCategory

  tfndClient: Connection
  tfnd: ModelTNFD

  async connect(config: DbConfig, opt: { needSync: boolean }) {
    this.config = {
      ...config,
      entities: ['entities/*.js'],
      type: 'postgres',
      name: 'veggies'
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

      this.foodCategory = new ModelFoodCategory(this.client)

      return this.client
    } catch (error) {
      throw error
    }
  }

  async connectTdNd(config: DbConfig, opt: { needSync: boolean }) {
    this.config = {
      ...config,
      entities: ['entities/*.js'],
      type: 'postgres',
      name: 'tfnd'
    }
    try {
      const connectionConfig: ConnectionOptions = {
        ...this.config
      }
      this.tfndClient = await createConnection(connectionConfig)

      if (opt.needSync === true) {
        await this.tfndClient.createQueryRunner().createSchema(<string>config.schema, true)
        await this.tfndClient.synchronize(true)
      }
      this.tfnd = new ModelTNFD(this.tfndClient)

      return this.client
    } catch (error) {
      throw error
    }
  }

  async checkConnection() {
    try {
      if (this.client !== undefined) {
        await this.client.query('SELECT 1')
        await this.tfndClient.query('SELECT 1')
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
      if (this.tfndClient !== undefined) await this.tfndClient.close()
    } catch (error) {
      throw error
    }
  }
}

export = new Rdb()
