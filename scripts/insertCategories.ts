import config from 'config'
import db from '../repositories/db'
import { uniq } from 'ramda'
import { TNFD } from '../entities/TNFD'
const dbConfig = config.get('db') as any
const tfndDbConfig = config.get('tfndDb') as any

async function main() {
  await db.connect(dbConfig, { needSync: false })
  await db.connectTdNd(tfndDbConfig, { needSync: false })

  const foodCategories = await getAllCategoryFromTnfdDB()
  const uniqueCategories = getUniqueCategory(foodCategories)
  await insertIntoVeggiesDB(uniqueCategories)

  await db.disconnect()
}

main().catch(async (error) => {
  await db.disconnect()
  console.error(error)
})

async function getAllCategoryFromTnfdDB() {
  return db.tfndClient.getRepository(TNFD).find({ select: ['foodCategory'] })
}

function getUniqueCategory(input: { foodCategory: string }[]) {
  const flatten = input.map((i) => i.foodCategory)
  return uniq(flatten)
}

async function insertIntoVeggiesDB(input: string[]) {
  const entities = input.map((i) => ({ name: i }))
  await db.foodCategory.create(entities)
}
