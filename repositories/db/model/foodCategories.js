"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelFoodCategory = void 0;
const FoodCategory_1 = require("../../../entities/FoodCategory");
class ModelFoodCategory {
    constructor(client) {
        this.tag = 'db/model/foodCategory';
        this.client = client;
    }
    async create(categories) {
        await this.client.getRepository(FoodCategory_1.FoodCategory).insert(categories);
    }
}
exports.ModelFoodCategory = ModelFoodCategory;
//# sourceMappingURL=foodCategories.js.map