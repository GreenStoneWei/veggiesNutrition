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
  getVitaminK,
  getFolicAcid,
  getCalcium,
  getPhosphorus,
  getMagnesium,
  getFerrum,
  getZinc,
  getSodium,
  getPotassium
} from '../api/foodIngredients/service'
import { isNil } from 'ramda'
const dbConfig = config.get('db') as any
const tfndDbConfig = config.get('tfndDb') as any

async function main() {
  await db.connect(dbConfig, { needSync: false })
  await db.connectTdNd(tfndDbConfig, { needSync: false })
  const ingredient = '大蒜'
  const details = await db.tfnd.getByName(ingredient)
  getAllNutritionByIngredient(details)
  // console.log('details', details)

  await db.disconnect()
}

main().catch(async (error) => {
  await db.disconnect()
  console.error(error)
})

async function getAllNutritionByIngredient(tndf: TNFD[]) {
  const entites = []
  entites.push(getCalories(tndf))
  entites.push(getTotalCarbohydrate(tndf))
  entites.push(getCrudeProtein(tndf))
  entites.push(getDietaryFiber(tndf))
  entites.push(getVitaminA(tndf))
  entites.push(getVitaminB1(tndf))
  entites.push(getVitaminB2(tndf))
  entites.push(getNiacin(tndf))
  entites.push(getVitaminB6(tndf))
  entites.push(getVitaminB12(tndf))
  entites.push(getVitaminC(tndf))
  entites.push(getVitaminD(tndf))
  entites.push(getVitaminK(tndf))
  entites.push(getFolicAcid(tndf))
  entites.push(getCalcium(tndf))
  entites.push(getPhosphorus(tndf))
  entites.push(getMagnesium(tndf))
  entites.push(getFerrum(tndf))
  entites.push(getZinc(tndf))
  entites.push(getSodium(tndf))
  entites.push(getPotassium(tndf))
  // const calories = getCalories(tndf)
  // const totalCarbs = getTotalCarbohydrate(tndf)
  // const crudeProtein = getCrudeProtein(tndf)
  // const dietaryFiber = getDietaryFiber(tndf)
  // const vitaminA = getVitaminA(tndf)
  // const vitaminB1 = getVitaminB1(tndf)
  // const vitaminB2 = getVitaminB2(tndf)
  // const niacin = getNiacin(tndf)
  // const vitaminB6 = getVitaminB6(tndf)
  // const vitaminB12 = getVitaminB12(tndf)
  // const vitaminC = getVitaminC(tndf)
  // const vitaminD = getVitaminD(tndf)
  // const vitaminK = getVitaminK(tndf)
  // const folicAcid = getFolicAcid(tndf)
  // const calcium = getCalcium(tndf)
  // const phosphorus = getPhosphorus(tndf)
  // const magnesium = getMagnesium(tndf)
  // const ferrum = getFerrum(tndf)
  // const zinc = getZinc(tndf)
  // const sodium = getSodium(tndf)
  // const potassium = getPotassium(tndf)
  console.log('entites', entites)
  return entites.filter((e) => !isNil(e))
}
