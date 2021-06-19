import { Connection, Repository } from 'typeorm'
import { FoodCategory } from '../../../entities/FoodCategory'

export class ModelFoodCategory {
  client: Connection
  tag: string = 'db/model/foodCategory'

  constructor(client: Connection) {
    this.client = client
  }

  async create(categories: { name: string }[]) {
    await this.client.getRepository(FoodCategory).insert(categories)
  }
}
