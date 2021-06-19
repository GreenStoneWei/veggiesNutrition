"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const db_1 = __importDefault(require("../repositories/db"));
const service_1 = require("../api/foodIngredients/service");
const ramda_1 = require("ramda");
const dbConfig = config_1.default.get('db');
const tfndDbConfig = config_1.default.get('tfndDb');
async function main() {
    await db_1.default.connect(dbConfig, { needSync: false });
    await db_1.default.connectTdNd(tfndDbConfig, { needSync: false });
    const ingredient = '大蒜';
    const details = await db_1.default.tfnd.getByName(ingredient);
    getAllNutritionByIngredient(details);
    // console.log('details', details)
    await db_1.default.disconnect();
}
main().catch(async (error) => {
    await db_1.default.disconnect();
    console.error(error);
});
async function getAllNutritionByIngredient(tndf) {
    const entites = [];
    entites.push(service_1.getCalories(tndf));
    entites.push(service_1.getTotalCarbohydrate(tndf));
    entites.push(service_1.getCrudeProtein(tndf));
    entites.push(service_1.getDietaryFiber(tndf));
    entites.push(service_1.getVitaminA(tndf));
    entites.push(service_1.getVitaminB1(tndf));
    entites.push(service_1.getVitaminB2(tndf));
    entites.push(service_1.getNiacin(tndf));
    entites.push(service_1.getVitaminB6(tndf));
    entites.push(service_1.getVitaminB12(tndf));
    entites.push(service_1.getVitaminC(tndf));
    entites.push(service_1.getVitaminD(tndf));
    entites.push(service_1.getVitaminK(tndf));
    entites.push(service_1.getFolicAcid(tndf));
    entites.push(service_1.getCalcium(tndf));
    entites.push(service_1.getPhosphorus(tndf));
    entites.push(service_1.getMagnesium(tndf));
    entites.push(service_1.getFerrum(tndf));
    entites.push(service_1.getZinc(tndf));
    entites.push(service_1.getSodium(tndf));
    entites.push(service_1.getPotassium(tndf));
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
    console.log('entites', entites);
    return entites.filter((e) => !ramda_1.isNil(e));
}
//# sourceMappingURL=getNutritionByName.js.map