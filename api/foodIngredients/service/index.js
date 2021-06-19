"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVitaminK = exports.getVitaminD = exports.getVitaminC = exports.getVitaminB12 = exports.getVitaminB6 = exports.getNiacin = exports.getVitaminB2 = exports.getVitaminB1 = exports.getVitaminA = exports.getDietaryFiber = exports.getCrudeFat = exports.getCrudeProtein = exports.getTotalCarbohydrate = exports.getCalories = void 0;
const FoodIngredient_1 = require("../../../entities/FoodIngredient");
var categoryMap;
(function (categoryMap) {
    categoryMap[categoryMap["\u9B5A\u8C9D\u985E"] = 1] = "\u9B5A\u8C9D\u985E";
    categoryMap[categoryMap["\u7A40\u7269\u985E"] = 2] = "\u7A40\u7269\u985E";
    categoryMap[categoryMap["\u7CD5\u9905\u9EDE\u5FC3\u985E"] = 3] = "\u7CD5\u9905\u9EDE\u5FC3\u985E";
    categoryMap[categoryMap["\u52A0\u5DE5\u8ABF\u7406\u98DF\u54C1\u53CA\u5176\u4ED6\u985E"] = 4] = "\u52A0\u5DE5\u8ABF\u7406\u98DF\u54C1\u53CA\u5176\u4ED6\u985E";
    categoryMap[categoryMap["\u83C7\u985E"] = 5] = "\u83C7\u985E";
    categoryMap[categoryMap["\u852C\u83DC\u985E"] = 6] = "\u852C\u83DC\u985E";
    categoryMap[categoryMap["\u6C34\u679C\u985E"] = 7] = "\u6C34\u679C\u985E";
    categoryMap[categoryMap["\u98F2\u6599\u985E"] = 8] = "\u98F2\u6599\u985E";
    categoryMap[categoryMap["\u8089\u985E"] = 9] = "\u8089\u985E";
    categoryMap[categoryMap["\u4E73\u54C1\u985E"] = 10] = "\u4E73\u54C1\u985E";
    categoryMap[categoryMap["\u85FB\u985E"] = 11] = "\u85FB\u985E";
    categoryMap[categoryMap["\u5805\u679C\u53CA\u7A2E\u5B50\u985E"] = 12] = "\u5805\u679C\u53CA\u7A2E\u5B50\u985E";
    categoryMap[categoryMap["\u7CD6\u985E"] = 13] = "\u7CD6\u985E";
    categoryMap[categoryMap["\u6CB9\u8102\u985E"] = 14] = "\u6CB9\u8102\u985E";
    categoryMap[categoryMap["\u6FB1\u7C89\u985E"] = 15] = "\u6FB1\u7C89\u985E";
    categoryMap[categoryMap["\u8ABF\u5473\u6599\u53CA\u9999\u8F9B\u6599\u985E"] = 16] = "\u8ABF\u5473\u6599\u53CA\u9999\u8F9B\u6599\u985E";
    categoryMap[categoryMap["\u86CB\u985E"] = 17] = "\u86CB\u985E";
    categoryMap[categoryMap["\u8C46\u985E"] = 18] = "\u8C46\u985E";
})(categoryMap || (categoryMap = {}));
function getCalories(raw) {
    const totalCalories = raw.find((tnfd) => tnfd.analyzedItem === '修正熱量');
    if (!totalCalories) {
        console.warn('cannot find 修正熱量');
        return;
    }
    return {
        name: totalCalories.name,
        categoryId: categoryMap[totalCalories.foodCategory],
        nutritionItem: FoodIngredient_1.NutritionItem.calories,
        content: Number(totalCalories.qtyPerHundredGram),
        unit: totalCalories.unit
    };
}
exports.getCalories = getCalories;
function getTotalCarbohydrate(raw) {
    const totalCarbohydrate = raw.find((tnfd) => tnfd.analyzedItem === '總碳水化合物');
    if (!totalCarbohydrate) {
        console.warn('cannot find 總碳水化合物');
        return;
    }
    return {
        name: totalCarbohydrate.name,
        categoryId: categoryMap[totalCarbohydrate.foodCategory],
        nutritionItem: FoodIngredient_1.NutritionItem.totalCarbohydrate,
        content: Number(totalCarbohydrate.qtyPerHundredGram),
        unit: totalCarbohydrate.unit
    };
}
exports.getTotalCarbohydrate = getTotalCarbohydrate;
function getCrudeProtein(raw) {
    const crudeProtein = raw.find((tnfd) => tnfd.analyzedItem === '粗蛋白');
    if (!crudeProtein) {
        console.warn('cannot find 粗蛋白');
        return;
    }
    return {
        name: crudeProtein.name,
        categoryId: categoryMap[crudeProtein.foodCategory],
        nutritionItem: FoodIngredient_1.NutritionItem.crudeProtein,
        content: Number(crudeProtein.qtyPerHundredGram),
        unit: crudeProtein.unit
    };
}
exports.getCrudeProtein = getCrudeProtein;
function getCrudeFat(raw) {
    const crudeFat = raw.find((tnfd) => tnfd.analyzedItem === '粗脂肪');
    if (!crudeFat) {
        console.warn('cannot find 粗脂肪');
        return;
    }
    return {
        name: crudeFat.name,
        categoryId: categoryMap[crudeFat.foodCategory],
        nutritionItem: FoodIngredient_1.NutritionItem.crudeFat,
        content: Number(crudeFat.qtyPerHundredGram),
        unit: crudeFat.unit
    };
}
exports.getCrudeFat = getCrudeFat;
function getDietaryFiber(raw) {
    const dietaryFiber = raw.find((tnfd) => tnfd.analyzedItem === '膳食纖維');
    if (!dietaryFiber) {
        console.warn('cannot find 膳食纖維');
        return;
    }
    return {
        name: dietaryFiber.name,
        categoryId: categoryMap[dietaryFiber.foodCategory],
        nutritionItem: FoodIngredient_1.NutritionItem.dietaryFiber,
        content: Number(dietaryFiber.qtyPerHundredGram),
        unit: dietaryFiber.unit
    };
}
exports.getDietaryFiber = getDietaryFiber;
function getVitaminA(raw) {
    const vitaminA = raw.find((tnfd) => tnfd.analyzedItem === '維生素A總量(IU)');
    if (!vitaminA) {
        console.warn('cannot find 維生素A總量');
        return;
    }
    return {
        name: vitaminA.name,
        categoryId: categoryMap[vitaminA.foodCategory],
        nutritionItem: FoodIngredient_1.NutritionItem.vitaminA,
        content: Number(vitaminA.qtyPerHundredGram),
        unit: vitaminA.unit
    };
}
exports.getVitaminA = getVitaminA;
function getVitaminB1(raw) {
    const vitaminB1 = raw.find((tnfd) => tnfd.analyzedItem === '維生素B1');
    if (!vitaminB1) {
        console.warn('cannot find 維生素B1');
        return;
    }
    return {
        name: vitaminB1.name,
        categoryId: categoryMap[vitaminB1.foodCategory],
        nutritionItem: FoodIngredient_1.NutritionItem.vitaminB1,
        content: Number(vitaminB1.qtyPerHundredGram),
        unit: vitaminB1.unit
    };
}
exports.getVitaminB1 = getVitaminB1;
function getVitaminB2(raw) {
    const vitaminB2 = raw.find((tnfd) => tnfd.analyzedItem === '維生素B2');
    if (!vitaminB2) {
        console.warn('cannot find 維生素B2');
        return;
    }
    return {
        name: vitaminB2.name,
        categoryId: categoryMap[vitaminB2.foodCategory],
        nutritionItem: FoodIngredient_1.NutritionItem.vitaminB2,
        content: Number(vitaminB2.qtyPerHundredGram),
        unit: vitaminB2.unit
    };
}
exports.getVitaminB2 = getVitaminB2;
function getNiacin(raw) {
    const niacin = raw.find((tnfd) => tnfd.analyzedItem === '菸鹼素');
    if (!niacin) {
        console.warn('cannot find 菸鹼素');
        return;
    }
    return {
        name: niacin.name,
        categoryId: categoryMap[niacin.foodCategory],
        nutritionItem: FoodIngredient_1.NutritionItem.niacin,
        content: Number(niacin.qtyPerHundredGram),
        unit: niacin.unit
    };
}
exports.getNiacin = getNiacin;
function getVitaminB6(raw) {
    const vitaminB6 = raw.find((tnfd) => tnfd.analyzedItem === '維生素B6');
    if (!vitaminB6) {
        console.warn('cannot find 維生素B6');
        return;
    }
    return {
        name: vitaminB6.name,
        categoryId: categoryMap[vitaminB6.foodCategory],
        nutritionItem: FoodIngredient_1.NutritionItem.vitaminB6,
        content: Number(vitaminB6.qtyPerHundredGram),
        unit: vitaminB6.unit
    };
}
exports.getVitaminB6 = getVitaminB6;
function getVitaminB12(raw) {
    const vitaminB12 = raw.find((tnfd) => tnfd.analyzedItem === '維生素B12');
    if (!vitaminB12) {
        console.warn('cannot find 維生素B12');
        return;
    }
    return {
        name: vitaminB12.name,
        categoryId: categoryMap[vitaminB12.foodCategory],
        nutritionItem: FoodIngredient_1.NutritionItem.vitaminB12,
        content: Number(vitaminB12.qtyPerHundredGram),
        unit: vitaminB12.unit
    };
}
exports.getVitaminB12 = getVitaminB12;
function getVitaminC(raw) {
    const vitaminC = raw.find((tnfd) => tnfd.analyzedItem === '維生素C');
    if (!vitaminC) {
        console.warn('cannot find 維生素C');
        return;
    }
    return {
        name: vitaminC.name,
        categoryId: categoryMap[vitaminC.foodCategory],
        nutritionItem: FoodIngredient_1.NutritionItem.vitaminC,
        content: Number(vitaminC.qtyPerHundredGram),
        unit: vitaminC.unit
    };
}
exports.getVitaminC = getVitaminC;
function getVitaminD(raw) {
    const vitaminD = raw.find((tnfd) => tnfd.analyzedItem === '維生素D總量(IU)');
    if (!vitaminD) {
        console.warn('cannot find 維生素D總量(IU)');
        return;
    }
    return {
        name: vitaminD.name,
        categoryId: categoryMap[vitaminD.foodCategory],
        nutritionItem: FoodIngredient_1.NutritionItem.vitaminD,
        content: Number(vitaminD.qtyPerHundredGram),
        unit: vitaminD.unit
    };
}
exports.getVitaminD = getVitaminD;
function getVitaminK(raw) {
    const vitaminK = raw.filter((tnfd) => tnfd.analyzedCategory === '維生素K');
    if (vitaminK.length === 0) {
        console.warn('cannot find 維生素K');
        return;
    }
    let content = 0;
    vitaminK.forEach((k) => (content += Number(k.qtyPerHundredGram)));
    return {
        name: vitaminK[0].name,
        categoryId: categoryMap[vitaminK[0].foodCategory],
        nutritionItem: FoodIngredient_1.NutritionItem.vitaminK,
        content,
        unit: vitaminK[0].unit
    };
}
exports.getVitaminK = getVitaminK;
function transformToFoodIngredient(name, categoryId, nutritionItem, content, unit) {
    return {
        name,
        categoryId,
        nutritionItem,
        content,
        unit
    };
}
//# sourceMappingURL=index.js.map