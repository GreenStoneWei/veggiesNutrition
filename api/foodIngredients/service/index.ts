import { TNFD } from '../../../entities/TNFD'
import { NutritionItem } from '../../../entities/FoodIngredient'
import db from '../../../repositories/db'
enum categoryMap {
  '魚貝類' = 1,
  '穀物類',
  '糕餅點心類',
  '加工調理食品及其他類',
  '菇類',
  '蔬菜類',
  '水果類',
  '飲料類',
  '肉類',
  '乳品類',
  '藻類',
  '堅果及種子類',
  '糖類',
  '油脂類',
  '澱粉類',
  '調味料及香辛料類',
  '蛋類',
  '豆類'
}

export function getCalories(raw: TNFD[]) {
  const totalCalories = raw.find((tnfd) => tnfd.analyzedItem === '修正熱量')
  if (!totalCalories) {
    console.warn('cannot find 修正熱量')
    return
  }
  return {
    name: totalCalories.name,
    categoryId: categoryMap[totalCalories.foodCategory as any],
    nutritionItem: NutritionItem.calories,
    content: Number(totalCalories.qtyPerHundredGram),
    unit: totalCalories.unit
  }
}

export function getTotalCarbohydrate(raw: TNFD[]) {
  const totalCarbohydrate = raw.find((tnfd) => tnfd.analyzedItem === '總碳水化合物')
  if (!totalCarbohydrate) {
    console.warn('cannot find 總碳水化合物')
    return
  }
  return {
    name: totalCarbohydrate.name,
    categoryId: categoryMap[totalCarbohydrate.foodCategory as any],
    nutritionItem: NutritionItem.totalCarbohydrate,
    content: Number(totalCarbohydrate.qtyPerHundredGram),
    unit: totalCarbohydrate.unit
  }
}

export function getCrudeProtein(raw: TNFD[]) {
  const crudeProtein = raw.find((tnfd) => tnfd.analyzedItem === '粗蛋白')
  if (!crudeProtein) {
    console.warn('cannot find 粗蛋白')
    return
  }
  return {
    name: crudeProtein.name,
    categoryId: categoryMap[crudeProtein.foodCategory as any],
    nutritionItem: NutritionItem.crudeProtein,
    content: Number(crudeProtein.qtyPerHundredGram),
    unit: crudeProtein.unit
  }
}

export function getCrudeFat(raw: TNFD[]) {
  const crudeFat = raw.find((tnfd) => tnfd.analyzedItem === '粗脂肪')
  if (!crudeFat) {
    console.warn('cannot find 粗脂肪')
    return
  }
  return {
    name: crudeFat.name,
    categoryId: categoryMap[crudeFat.foodCategory as any],
    nutritionItem: NutritionItem.crudeFat,
    content: Number(crudeFat.qtyPerHundredGram),
    unit: crudeFat.unit
  }
}

export function getDietaryFiber(raw: TNFD[]) {
  const dietaryFiber = raw.find((tnfd) => tnfd.analyzedItem === '膳食纖維')
  if (!dietaryFiber) {
    console.warn('cannot find 膳食纖維')
    return
  }
  return {
    name: dietaryFiber.name,
    categoryId: categoryMap[dietaryFiber.foodCategory as any],
    nutritionItem: NutritionItem.dietaryFiber,
    content: Number(dietaryFiber.qtyPerHundredGram),
    unit: dietaryFiber.unit
  }
}

export function getVitaminA(raw: TNFD[]) {
  const vitaminA = raw.find((tnfd) => tnfd.analyzedItem === '維生素A總量(IU)')
  if (!vitaminA) {
    console.warn('cannot find 維生素A總量')
    return
  }
  return {
    name: vitaminA.name,
    categoryId: categoryMap[vitaminA.foodCategory as any],
    nutritionItem: NutritionItem.vitaminA,
    content: Number(vitaminA.qtyPerHundredGram),
    unit: vitaminA.unit
  }
}

export function getVitaminB1(raw: TNFD[]) {
  const vitaminB1 = raw.find((tnfd) => tnfd.analyzedItem === '維生素B1')
  if (!vitaminB1) {
    console.warn('cannot find 維生素B1')
    return
  }
  return {
    name: vitaminB1.name,
    categoryId: categoryMap[vitaminB1.foodCategory as any],
    nutritionItem: NutritionItem.vitaminB1,
    content: Number(vitaminB1.qtyPerHundredGram),
    unit: vitaminB1.unit
  }
}

export function getVitaminB2(raw: TNFD[]) {
  const vitaminB2 = raw.find((tnfd) => tnfd.analyzedItem === '維生素B2')
  if (!vitaminB2) {
    console.warn('cannot find 維生素B2')
    return
  }
  return {
    name: vitaminB2.name,
    categoryId: categoryMap[vitaminB2.foodCategory as any],
    nutritionItem: NutritionItem.vitaminB2,
    content: Number(vitaminB2.qtyPerHundredGram),
    unit: vitaminB2.unit
  }
}

export function getNiacin(raw: TNFD[]) {
  const niacin = raw.find((tnfd) => tnfd.analyzedItem === '菸鹼素')
  if (!niacin) {
    console.warn('cannot find 菸鹼素')
    return
  }
  return {
    name: niacin.name,
    categoryId: categoryMap[niacin.foodCategory as any],
    nutritionItem: NutritionItem.niacin,
    content: Number(niacin.qtyPerHundredGram),
    unit: niacin.unit
  }
}

export function getVitaminB6(raw: TNFD[]) {
  const vitaminB6 = raw.find((tnfd) => tnfd.analyzedItem === '維生素B6')
  if (!vitaminB6) {
    console.warn('cannot find 維生素B6')
    return
  }
  return {
    name: vitaminB6.name,
    categoryId: categoryMap[vitaminB6.foodCategory as any],
    nutritionItem: NutritionItem.vitaminB6,
    content: Number(vitaminB6.qtyPerHundredGram),
    unit: vitaminB6.unit
  }
}

export function getVitaminB12(raw: TNFD[]) {
  const vitaminB12 = raw.find((tnfd) => tnfd.analyzedItem === '維生素B12')
  if (!vitaminB12) {
    console.warn('cannot find 維生素B12')
    return
  }
  return {
    name: vitaminB12.name,
    categoryId: categoryMap[vitaminB12.foodCategory as any],
    nutritionItem: NutritionItem.vitaminB12,
    content: Number(vitaminB12.qtyPerHundredGram),
    unit: vitaminB12.unit
  }
}

export function getVitaminC(raw: TNFD[]) {
  const vitaminC = raw.find((tnfd) => tnfd.analyzedItem === '維生素C')
  if (!vitaminC) {
    console.warn('cannot find 維生素C')
    return
  }
  return {
    name: vitaminC.name,
    categoryId: categoryMap[vitaminC.foodCategory as any],
    nutritionItem: NutritionItem.vitaminC,
    content: Number(vitaminC.qtyPerHundredGram),
    unit: vitaminC.unit
  }
}

export function getVitaminD(raw: TNFD[]) {
  const vitaminD = raw.find((tnfd) => tnfd.analyzedItem === '維生素D總量(IU)')
  if (!vitaminD) {
    console.warn('cannot find 維生素D總量(IU)')
    return
  }
  return {
    name: vitaminD.name,
    categoryId: categoryMap[vitaminD.foodCategory as any],
    nutritionItem: NutritionItem.vitaminD,
    content: Number(vitaminD.qtyPerHundredGram),
    unit: vitaminD.unit
  }
}

export function getVitaminK(raw: TNFD[]) {
  const vitaminK = raw.filter((tnfd) => tnfd.analyzedCategory === '維生素K')
  if (vitaminK.length === 0) {
    console.warn('cannot find 維生素K')
    return
  }
  let content = 0

  vitaminK.forEach((k) => (content += Number(k.qtyPerHundredGram)))

  return {
    name: vitaminK[0].name,
    categoryId: categoryMap[vitaminK[0].foodCategory as any],
    nutritionItem: NutritionItem.vitaminK,
    content,
    unit: vitaminK[0].unit
  }
}

export function getFolicAcid(raw: TNFD[]) {
  const folicAcid = raw.find((tnfd) => tnfd.analyzedItem === '葉酸')
  if (!folicAcid) {
    console.warn('cannot find 葉酸')
    return
  }
  return {
    name: folicAcid.name,
    categoryId: categoryMap[folicAcid.foodCategory as any],
    nutritionItem: NutritionItem.folicAcid,
    content: Number(folicAcid.qtyPerHundredGram),
    unit: folicAcid.unit
  }
}

export function getCalcium(raw: TNFD[]) {
  const calcium = raw.find((tnfd) => tnfd.analyzedItem === '鈣')
  if (!calcium) {
    console.warn('cannot find 鈣')
    return
  }
  return {
    name: calcium.name,
    categoryId: categoryMap[calcium.foodCategory as any],
    nutritionItem: NutritionItem.calcium,
    content: Number(calcium.qtyPerHundredGram),
    unit: calcium.unit
  }
}

export function getPhosphorus(raw: TNFD[]) {
  const phosphorus = raw.find((tnfd) => tnfd.analyzedItem === '磷')
  if (!phosphorus) {
    console.warn('cannot find 磷')
    return
  }
  return {
    name: phosphorus.name,
    categoryId: categoryMap[phosphorus.foodCategory as any],
    nutritionItem: NutritionItem.phosphorus,
    content: Number(phosphorus.qtyPerHundredGram),
    unit: phosphorus.unit
  }
}

export function getMagnesium(raw: TNFD[]) {
  const magnesium = raw.find((tnfd) => tnfd.analyzedItem === '鎂')
  if (!magnesium) {
    console.warn('cannot find 鎂')
    return
  }
  return {
    name: magnesium.name,
    categoryId: categoryMap[magnesium.foodCategory as any],
    nutritionItem: NutritionItem.magnesium,
    content: Number(magnesium.qtyPerHundredGram),
    unit: magnesium.unit
  }
}

export function getFerrum(raw: TNFD[]) {
  const ferrum = raw.find((tnfd) => tnfd.analyzedItem === '鐵')
  if (!ferrum) {
    console.warn('cannot find 鐵')
    return
  }
  return {
    name: ferrum.name,
    categoryId: categoryMap[ferrum.foodCategory as any],
    nutritionItem: NutritionItem.ferrum,
    content: Number(ferrum.qtyPerHundredGram),
    unit: ferrum.unit
  }
}

export function getZinc(raw: TNFD[]) {
  const zinc = raw.find((tnfd) => tnfd.analyzedItem === '鋅')
  if (!zinc) {
    console.warn('cannot find 鋅')
    return
  }
  return {
    name: zinc.name,
    categoryId: categoryMap[zinc.foodCategory as any],
    nutritionItem: NutritionItem.zinc,
    content: Number(zinc.qtyPerHundredGram),
    unit: zinc.unit
  }
}

export function getSodium(raw: TNFD[]) {
  const sodium = raw.find((tnfd) => tnfd.analyzedItem === '鈉')
  if (!sodium) {
    console.warn('cannot find 鈉')
    return
  }
  return {
    name: sodium.name,
    categoryId: categoryMap[sodium.foodCategory as any],
    nutritionItem: NutritionItem.sodium,
    content: Number(sodium.qtyPerHundredGram),
    unit: sodium.unit
  }
}

export function getPotassium(raw: TNFD[]) {
  const potassium = raw.find((tnfd) => tnfd.analyzedItem === '鉀')
  if (!potassium) {
    console.warn('cannot find 鉀')
    return
  }
  return {
    name: potassium.name,
    categoryId: categoryMap[potassium.foodCategory as any],
    nutritionItem: NutritionItem.potassium,
    content: Number(potassium.qtyPerHundredGram),
    unit: potassium.unit
  }
}

export function getOmega3(raw: TNFD[]) {
  //
  // return {
  //   name: potassium.name,
  //   categoryId: categoryMap[potassium.foodCategory as any],
  //   nutritionItem: NutritionItem.potassium,
  //   content: Number(potassium.qtyPerHundredGram),
  //   unit: potassium.unit
  // }
}

export function getOmega6(raw: TNFD[]) {
  const potassium = raw.find((tnfd) => tnfd.analyzedItem === '鉀')
  if (!potassium) {
    console.warn('cannot find 鉀')
    return
  }
  return {
    name: potassium.name,
    categoryId: categoryMap[potassium.foodCategory as any],
    nutritionItem: NutritionItem.potassium,
    content: Number(potassium.qtyPerHundredGram),
    unit: potassium.unit
  }
}

function transformToFoodIngredient(name: string, categoryId: number, nutritionItem: NutritionItem, content: number, unit: string) {
  return {
    name,
    categoryId,
    nutritionItem,
    content,
    unit
  }
}
