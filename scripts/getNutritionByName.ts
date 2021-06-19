import config from 'config'
import db from '../repositories/db'
import { TNFD } from '../entities/TNFD'
import { FoodIngredient } from '../entities/FoodIngredient'
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
  getPotassium,
  getCholesterol
} from '../api/foodIngredients/service'
import { isNil } from 'ramda'
const dbConfig = config.get('db') as any
const tfndDbConfig = config.get('tfndDb') as any

async function main() {
  await db.connect(dbConfig, { needSync: false })
  await db.connectTdNd(tfndDbConfig, { needSync: false })
  const ingredients = [
    '馬鈴薯',
    '白洋蔥',
    '蓮藕',
    '黃肉甘薯',
    '紅肉甘薯',
    '甜玉米',
    '芋頭',
    '牛蒡',
    '山藥平均值',
    '甜椒(青皮)',
    '甜椒(紅皮)',
    '甜椒(黃皮)',
    '長茄子',
    '花胡瓜',
    '胡瓜',
    '冬瓜平均值',
    '絲瓜',
    '苦瓜(白皮)',
    '苦瓜(青皮)',
    '敏豆莢',
    '牛番茄',
    '小番茄平均值(紅色系)',
    '青花菜',
    '花椰菜',
    '山蘇菜',
    '結球白菜平均值',
    '水植小白菜(4月取樣)',
    '芥藍菜',
    '水植蕹菜(4月取樣)',
    '油菜',
    '菠菜',
    '結球萵苣',
    '白莧菜',
    '甘藷葉',
    '綠豆芽',
    '黃豆芽',
    '麻竹筍',
    '綠竹筍',
    '熟桂竹筍',
    '酸菜',
    '豬血',
    '鴨血',
    '豌豆苗',
    '杏鮑菇平均值',
    '香菇平均值',
    '洋菇',
    '草菇',
    '金針菇',
    '木耳',
    '百合鱗片',
    '龍骨瓣莕菜',
    '荸薺',
    '韮菜',
    '韮菜黃',
    '苜蓿芽',
    '檸檬',
    '萊姆',
    '芥菜平均值',
    '雪裡蕻',
    '海帶平均值',
    '黑豆干',
    '小方豆干',
    '雞蛋豆腐',
    '嫩豆腐',
    '傳統豆腐',
    '鴨鹹蛋平均值',
    '雞皮蛋平均值',
    '油條',
    '帶莢毛豆',
    '文蛤'
  ]
  await Promise.all(
    ingredients.map(async (ingredient) => {
      const details = await db.tfnd.getByName(ingredient)
      const allNutritions = getAllNutritionByIngredient(details)
      await db.foodIngredient.create(allNutritions as Partial<FoodIngredient>[])
    })
  )

  await db.disconnect()
}

main().catch(async (error) => {
  await db.disconnect()
  console.error(error)
})

function getAllNutritionByIngredient(tndf: TNFD[]) {
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
  entites.push(getCholesterol(tndf))
  console.log('entites', entites)
  return entites.filter((e) => !isNil(e))
}
