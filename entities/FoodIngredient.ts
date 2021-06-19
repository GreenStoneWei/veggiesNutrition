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
    type: 'text'
  })
  nutritionItem: string

  @Column({
    type: 'real'
  })
  content: number

  @Column({
    type: 'varchar',
    length: '6'
  })
  unit: string

  @ManyToOne(() => FoodCategory)
  @JoinColumn({
    name: 'categoryId'
  })
  foodCategory: FoodCategory

  @OneToMany(() => Recipe, (recipe) => recipe.foodIngredient)
  recipes: Recipe[]
}

export enum NutritionItem {
  calories = 'calories',
  totalCarbohydrate = 'totalCarbohydrate',
  crudeProtein = 'crudeProtein',
  crudeFat = 'crudeFat',
  dietaryFiber = 'dietaryFiber',
  omega6 = 'omega6',
  omega3 = 'omega3',
  vitaminA = 'vitaminA',
  vitaminB1 = 'vitaminB1',
  vitaminB2 = 'vitaminB2',
  niacin = 'niacin', // 菸鹼素
  pantothenicAcid = 'pantothenicAcid', // 泛酸，食藥署資料庫中似乎沒有
  vitaminB6 = 'vitaminB6',
  vitaminB12 = 'vitaminB12',
  vitaminC = 'vitaminC',
  vitaminD = 'vitaminD',
  vitaminK = 'vitaminK',
  folicAcid = 'folicAcid',
  betaine = 'betaine',
  biotin = 'biotin',
  calcium = 'calcium',
  phosphorus = 'phosphorus',
  magnesium = 'magnesium',
  ferrum = 'ferrumr',
  zinc = 'zine',
  iodine = 'iodine',
  selenium = 'elenium',
  fluorine = 'fluorine'
}
