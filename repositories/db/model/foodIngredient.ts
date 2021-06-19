import { Connection } from 'typeorm'
import { FoodIngredient } from '../../../entities/FoodIngredient'

export class ModelFoodIngredient {
  client: Connection
  tag: string = 'db/model/foodIngredient'

  constructor(client: Connection) {
    this.client = client
  }

  async create(ingredients: Partial<FoodIngredient>[]) {
    await this.client.getRepository(FoodIngredient).insert(ingredients)
  }
}
