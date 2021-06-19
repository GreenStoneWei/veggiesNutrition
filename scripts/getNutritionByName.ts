import config from 'config'
import db from '../repositories/db'
import { TNFD } from '../entities/TNFD'
import {
  getCalories,
  getCrudeProtein,
  getTotalCarbohydrate,
  getDietaryFiber,
  getVitaminA,
  getVitaminB1,
  getVitaminB2,
  getNiacin,
  getVitaminB6,
  getVitaminB12,
  getVitaminC,
  getVitaminD,
  getVitaminK
} from '../api/foodIngredients/service'
const dbConfig = config.get('db') as any
const tfndDbConfig = config.get('tfndDb') as any

async function main() {
  await db.connect(dbConfig, { needSync: false })
  await db.connectTdNd(tfndDbConfig, { needSync: false })

  const details = await db.tfnd.getByName('大蒜')
  getAllNutritionByIngredient(details)
  // console.log('details', details)

  await db.disconnect()
}

main().catch(async (error) => {
  await db.disconnect()
  console.error(error)
})

async function getAllNutritionByIngredient(tndf: TNFD[]) {
  const calories = getCalories(tndf)
  const totalCarbs = getTotalCarbohydrate(tndf)
  const crudeProtein = getCrudeProtein(tndf)
  const dietaryFiber = getDietaryFiber(tndf)
  const vitaminA = getVitaminA(tndf)
  const vitaminB1 = getVitaminB1(tndf)
  const vitaminB2 = getVitaminB2(tndf)
  const niacin = getNiacin(tndf)
  const vitaminB6 = getVitaminB6(tndf)
  const vitaminB12 = getVitaminB12(tndf)
  const vitaminC = getVitaminC(tndf)
  const vitaminD = getVitaminD(tndf)
  const vitaminK = getVitaminK(tndf)
  // console.log('calories', calories)
  // console.log('totalCarbs', totalCarbs)
  console.log('crudeProtein', crudeProtein)
  console.log('dietaryFiber', dietaryFiber)
  console.log('vitaminK', vitaminK)
}
