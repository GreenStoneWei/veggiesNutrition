import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { FoodIngredient } from './FoodIngredient'

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn({
    type: 'int'
  })
  id: number

  @Column({
    type: 'text'
  })
  name: string

  @Column({
    type: 'int'
  })
  ingredientId: number

  @Column({
    type: 'real'
  })
  quantity: number

  @ManyToOne(() => FoodIngredient)
  @JoinColumn({
    name: 'ingredientId'
  })
  foodIngredient: FoodIngredient
}
