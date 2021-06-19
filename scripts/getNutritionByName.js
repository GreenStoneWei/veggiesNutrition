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
    ];
    await Promise.all(ingredients.map(async (ingredient) => {
        const details = await db_1.default.tfnd.getByName(ingredient);
        const allNutritions = getAllNutritionByIngredient(details);
        await db_1.default.foodIngredient.create(allNutritions);
    }));
    await db_1.default.disconnect();
}
main().catch(async (error) => {
    await db_1.default.disconnect();
    console.error(error);
});
function getAllNutritionByIngredient(tndf) {
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
    entites.push(service_1.getCholesterol(tndf));
    console.log('entites', entites);
    return entites.filter((e) => !ramda_1.isNil(e));
}
//# sourceMappingURL=getNutritionByName.js.map