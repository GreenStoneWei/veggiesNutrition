"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionItem = exports.FoodIngredient = void 0;
const typeorm_1 = require("typeorm");
const FoodCategory_1 = require("./FoodCategory");
const Recipe_1 = require("./Recipe");
let FoodIngredient = class FoodIngredient {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'int'
    })
], FoodIngredient.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text'
    })
], FoodIngredient.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int'
    })
], FoodIngredient.prototype, "categoryId", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text'
    })
], FoodIngredient.prototype, "nutritionItem", void 0);
__decorate([
    typeorm_1.Column({
        type: 'real'
    })
], FoodIngredient.prototype, "content", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: '6'
    })
], FoodIngredient.prototype, "unit", void 0);
__decorate([
    typeorm_1.ManyToOne(() => FoodCategory_1.FoodCategory),
    typeorm_1.JoinColumn({
        name: 'categoryId'
    })
], FoodIngredient.prototype, "foodCategory", void 0);
__decorate([
    typeorm_1.OneToMany(() => Recipe_1.Recipe, (recipe) => recipe.foodIngredient)
], FoodIngredient.prototype, "recipes", void 0);
FoodIngredient = __decorate([
    typeorm_1.Entity()
], FoodIngredient);
exports.FoodIngredient = FoodIngredient;
var NutritionItem;
(function (NutritionItem) {
    NutritionItem["calories"] = "calories";
    NutritionItem["totalCarbohydrate"] = "totalCarbohydrate";
    NutritionItem["crudeProtein"] = "crudeProtein";
    NutritionItem["crudeFat"] = "crudeFat";
    NutritionItem["dietaryFiber"] = "dietaryFiber";
    NutritionItem["omega6"] = "omega6";
    NutritionItem["omega3"] = "omega3";
    NutritionItem["vitaminA"] = "vitaminA";
    NutritionItem["vitaminB1"] = "vitaminB1";
    NutritionItem["vitaminB2"] = "vitaminB2";
    NutritionItem["niacin"] = "niacin";
    NutritionItem["pantothenicAcid"] = "pantothenicAcid";
    NutritionItem["vitaminB6"] = "vitaminB6";
    NutritionItem["vitaminB12"] = "vitaminB12";
    NutritionItem["vitaminC"] = "vitaminC";
    NutritionItem["vitaminD"] = "vitaminD";
    NutritionItem["vitaminK"] = "vitaminK";
    NutritionItem["folicAcid"] = "folicAcid";
    NutritionItem["betaine"] = "betaine";
    NutritionItem["biotin"] = "biotin";
    NutritionItem["calcium"] = "calcium";
    NutritionItem["phosphorus"] = "phosphorus";
    NutritionItem["magnesium"] = "magnesium";
    NutritionItem["ferrum"] = "ferrum";
    NutritionItem["zinc"] = "zinc";
    NutritionItem["iodine"] = "iodine";
    NutritionItem["selenium"] = "selenium";
    NutritionItem["fluorine"] = "fluorine";
    NutritionItem["cholesterol"] = "cholesterol";
    NutritionItem["sodium"] = "sodium";
    NutritionItem["potassium"] = "potassium";
})(NutritionItem = exports.NutritionItem || (exports.NutritionItem = {}));
//# sourceMappingURL=FoodIngredient.js.map