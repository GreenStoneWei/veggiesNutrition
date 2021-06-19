"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelFoodIngredient = void 0;
const FoodIngredient_1 = require("../../../entities/FoodIngredient");
class ModelFoodIngredient {
    constructor(client) {
        this.tag = 'db/model/foodIngredient';
        this.client = client;
    }
    async create(ingredients) {
        await this.client.getRepository(FoodIngredient_1.FoodIngredient).insert(ingredients);
    }
}
exports.ModelFoodIngredient = ModelFoodIngredient;
//# sourceMappingURL=foodIngredient.js.map