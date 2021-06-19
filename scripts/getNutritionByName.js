"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const db_1 = __importDefault(require("../repositories/db"));
const service_1 = require("../api/foodIngredients/service");
const dbConfig = config_1.default.get('db');
const tfndDbConfig = config_1.default.get('tfndDb');
async function main() {
    await db_1.default.connect(dbConfig, { needSync: false });
    await db_1.default.connectTdNd(tfndDbConfig, { needSync: false });
    const details = await db_1.default.tfnd.getByName('大蒜');
    getAllNutritionByIngredient(details);
    // console.log('details', details)
    await db_1.default.disconnect();
}
main().catch(async (error) => {
    await db_1.default.disconnect();
    console.error(error);
});
async function getAllNutritionByIngredient(tndf) {
    const calories = service_1.getCalories(tndf);
    const totalCarbs = service_1.getTotalCarbohydrate(tndf);
    const crudeProtein = service_1.getCrudeProtein(tndf);
    const dietaryFiber = service_1.getDietaryFiber(tndf);
    const vitaminA = service_1.getVitaminA(tndf);
    const vitaminB1 = service_1.getVitaminB1(tndf);
    const vitaminB2 = service_1.getVitaminB2(tndf);
    const niacin = service_1.getNiacin(tndf);
    const vitaminB6 = service_1.getVitaminB6(tndf);
    const vitaminB12 = service_1.getVitaminB12(tndf);
    const vitaminC = service_1.getVitaminC(tndf);
    const vitaminD = service_1.getVitaminD(tndf);
    const vitaminK = service_1.getVitaminK(tndf);
    // console.log('calories', calories)
    // console.log('totalCarbs', totalCarbs)
    console.log('crudeProtein', crudeProtein);
    console.log('dietaryFiber', dietaryFiber);
    console.log('vitaminK', vitaminK);
}
//# sourceMappingURL=getNutritionByName.js.map