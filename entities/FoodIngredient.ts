import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm'
import { FoodCategory } from './FoodCategory'
import { Recipe } from './Recipe'

@Entity()
export class FoodIngredient {
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
  categoryId: number

  @Column({
    type: 'int'
  })
  nutritionItem: number

  @Column({
    type: 'real'
  })
  content: number

  @ManyToOne(() => FoodCategory)
  @JoinColumn({
    name: 'categoryId'
  })
  foodCategory: FoodCategory

  @OneToMany(() => Recipe, (recipe) => recipe.foodIngredient)
  recipes: Recipe[]
}
