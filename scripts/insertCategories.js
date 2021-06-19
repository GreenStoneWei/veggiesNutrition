"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const db_1 = __importDefault(require("../repositories/db"));
const ramda_1 = require("ramda");
const TNFD_1 = require("../entities/TNFD");
const dbConfig = config_1.default.get('db');
const tfndDbConfig = config_1.default.get('tfndDb');
async function main() {
    await db_1.default.connect(dbConfig, { needSync: false });
    await db_1.default.connectTdNd(tfndDbConfig, { needSync: false });
    const foodCategories = await getAllCategoryFromTnfdDB();
    const uniqueCategories = getUniqueCategory(foodCategories);
    await insertIntoVeggiesDB(uniqueCategories);
    await db_1.default.disconnect();
}
main().catch(async (error) => {
    await db_1.default.disconnect();
    console.error(error);
});
async function getAllCategoryFromTnfdDB() {
    return db_1.default.tfndClient.getRepository(TNFD_1.TNFD).find({ select: ['foodCategory'] });
}
function getUniqueCategory(input) {
    const flatten = input.map((i) => i.foodCategory);
    return ramda_1.uniq(flatten);
}
async function insertIntoVeggiesDB(input) {
    const entities = input.map((i) => ({ name: i }));
    await db_1.default.foodCategory.create(entities);
}
//# sourceMappingURL=insertCategories.js.map