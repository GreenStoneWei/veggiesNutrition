import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany, OneToOne } from 'typeorm'
import { FoodIngredient } from './FoodIngredient'
@Entity()
export class FoodCategory {
  @PrimaryGeneratedColumn({
    type: 'int'
  })
  id: number

  @Column({
    type: 'text'
  })
  name: string

  @OneToMany(() => FoodIngredient, (foodIngredient) => foodIngredient.foodCategory)
  foodIngredients: FoodIngredient[]
}
