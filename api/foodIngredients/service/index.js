"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCholesterol = exports.getPotassium = exports.getSodium = exports.getZinc = exports.getFerrum = exports.getMagnesium = exports.getPhosphorus = exports.getCalcium = exports.getFolicAcid = exports.getVitaminK = exports.getVitaminD = exports.getVitaminC = exports.getVitaminB12 = exports.getVitaminB6 = exports.getNiacin = exports.getVitaminB2 = exports.getVitaminB1 = exports.getVitaminA = exports.getDietaryFiber = exports.getCrudeFat = exports.getCrudeProtein = exports.getTotalCarbohydrate = exports.getCalories = void 0;
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
        content: +Number(totalCalories.qtyPerHundredGram),
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
        content: +Number(totalCarbohydrate.qtyPerHundredGram).toFixed(2),
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
        content: +Number(crudeProtein.qtyPerHundredGram).toFixed(2),
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
        content: +Number(crudeFat.qtyPerHundredGram).toFixed(2),
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
        content: +Number(dietaryFiber.qtyPerHundredGram).toFixed(2),
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
        content: +Number(vitaminA.qtyPerHundredGram).toFixed(2),
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
        content: +Number(vitaminB1.qtyPerHundredGram).toFixed(2),
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
        content: +Number(vitaminB2.qtyPerHundredGram).toFixed(2),
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
        content: +Number(niacin.qtyPerHundredGram).toFixed(2),
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
        content: +Number(vitaminB6.qtyPerHundredGram).toFixed(2),
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
        content: +Number(vitaminB12.qtyPerHundredGram).toFixed(2),
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
        content: +Number(vitaminC.qtyPerHundredGram).toFixed(2),
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
        content: +Number(vitaminD.qtyPerHundredGram).toFixed(2),
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
        content: +content.toFixed(2),
        unit: vitaminK[0].unit
    };
}
exports.getVitaminK = getVitaminK;
function getFolicAcid(raw) {
    const folicAcid = raw.find((tnfd) => tnfd.analyzedItem === '葉酸');
    if (!folicAcid) {
        console.warn('cannot find 葉酸');
        return;
    }
    return {
        name: folicAcid.name,
        categoryId: categoryMap[folicAcid.foodCategory],
        nutritionItem: FoodIngredient_1.NutritionItem.folicAcid,
        content: +Number(folicAcid.qtyPerHundredGram).toFixed(2),
        unit: folicAcid.unit
    };
}
exports.getFolicAcid = getFolicAcid;
function getCalcium(raw) {
    const calcium = raw.find((tnfd) => tnfd.analyzedItem === '鈣');
    if (!calcium) {
        console.warn('cannot find 鈣');
        return;
    }
    return {
        name: calcium.name,
        categoryId: categoryMap[calcium.foodCategory],
        nutritionItem: FoodIngredient_1.NutritionItem.calcium,
        content: +Number(calcium.qtyPerHundredGram).toFixed(2),
        unit: calcium.unit
    };
}
exports.getCalcium = getCalcium;
function getPhosphorus(raw) {
    const phosphorus = raw.find((tnfd) => tnfd.analyzedItem === '磷');
    if (!phosphorus) {
        console.warn('cannot find 磷');
        return;
    }
    return {
        name: phosphorus.name,
        categoryId: categoryMap[phosphorus.foodCategory],
        nutritionItem: FoodIngredient_1.NutritionItem.phosphorus,
        content: +Number(phosphorus.qtyPerHundredGram).toFixed(2),
        unit: phosphorus.unit
    };
}
exports.getPhosphorus = getPhosphorus;
function getMagnesium(raw) {
    const magnesium = raw.find((tnfd) => tnfd.analyzedItem === '鎂');
    if (!magnesium) {
        console.warn('cannot find 鎂');
        return;
    }
    return {
        name: magnesium.name,
        categoryId: categoryMap[magnesium.foodCategory],
        nutritionItem: FoodIngredient_1.NutritionItem.magnesium,
        content: +Number(magnesium.qtyPerHundredGram).toFixed(2),
        unit: magnesium.unit
    };
}
exports.getMagnesium = getMagnesium;
function getFerrum(raw) {
    const ferrum = raw.find((tnfd) => tnfd.analyzedItem === '鐵');
    if (!ferrum) {
        console.warn('cannot find 鐵');
        return;
    }
    return {
        name: ferrum.name,
        categoryId: categoryMap[ferrum.foodCategory],
        nutritionItem: FoodIngredient_1.NutritionItem.ferrum,
        content: +Number(ferrum.qtyPerHundredGram).toFixed(2),
        unit: ferrum.unit
    };
}
exports.getFerrum = getFerrum;
function getZinc(raw) {
    const zinc = raw.find((tnfd) => tnfd.analyzedItem === '鋅');
    if (!zinc) {
        console.warn('cannot find 鋅');
        return;
    }
    return {
        name: zinc.name,
        categoryId: categoryMap[zinc.foodCategory],
        nutritionItem: FoodIngredient_1.NutritionItem.zinc,
        content: +Number(zinc.qtyPerHundredGram).toFixed(2),
        unit: zinc.unit
    };
}
exports.getZinc = getZinc;
function getSodium(raw) {
    const sodium = raw.find((tnfd) => tnfd.analyzedItem === '鈉');
    if (!sodium) {
        console.warn('cannot find 鈉');
        return;
    }
    return {
        name: sodium.name,
        categoryId: categoryMap[sodium.foodCategory],
        nutritionItem: FoodIngredient_1.NutritionItem.sodium,
        content: +Number(sodium.qtyPerHundredGram).toFixed(2),
        unit: sodium.unit
    };
}
exports.getSodium = getSodium;
function getPotassium(raw) {
    const potassium = raw.find((tnfd) => tnfd.analyzedItem === '鉀');
    if (!potassium) {
        console.warn('cannot find 鉀');
        return;
    }
    return {
        name: potassium.name,
        categoryId: categoryMap[potassium.foodCategory],
        nutritionItem: FoodIngredient_1.NutritionItem.potassium,
        content: +Number(potassium.qtyPerHundredGram).toFixed(2),
        unit: potassium.unit
    };
}
exports.getPotassium = getPotassium;
function getCholesterol(raw) {
    const cholesterol = raw.find((tnfd) => tnfd.analyzedItem === '膽固醇');
    if (!cholesterol) {
        console.warn('cannot find 膽固醇');
        return;
    }
    return {
        name: cholesterol.name,
        categoryId: categoryMap[cholesterol.foodCategory],
        nutritionItem: FoodIngredient_1.NutritionItem.cholesterol,
        content: +Number(cholesterol.qtyPerHundredGram).toFixed(2),
        unit: cholesterol.unit
    };
}
exports.getCholesterol = getCholesterol;
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