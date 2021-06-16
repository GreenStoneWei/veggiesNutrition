"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodCategory = void 0;
const typeorm_1 = require("typeorm");
const FoodIngredient_1 = require("./FoodIngredient");
let FoodCategory = class FoodCategory {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'int'
    })
], FoodCategory.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text'
    })
], FoodCategory.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToMany(() => FoodIngredient_1.FoodIngredient, (foodIngredient) => foodIngredient.foodCategory)
], FoodCategory.prototype, "foodIngredients", void 0);
FoodCategory = __decorate([
    typeorm_1.Entity()
], FoodCategory);
exports.FoodCategory = FoodCategory;
//# sourceMappingURL=FoodCategory.js.map