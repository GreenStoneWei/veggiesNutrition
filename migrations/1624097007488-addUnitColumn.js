"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUnitColumn1624097007488 = void 0;
class addUnitColumn1624097007488 {
    constructor() {
        this.name = 'addUnitColumn1624097007488';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "food_ingredient" ADD "unit" character varying(6) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "food_ingredient" DROP COLUMN "nutritionItem"`);
        await queryRunner.query(`ALTER TABLE "food_ingredient" ADD "nutritionItem" text NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "food_ingredient" DROP COLUMN "nutritionItem"`);
        await queryRunner.query(`ALTER TABLE "food_ingredient" ADD "nutritionItem" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "food_ingredient" DROP COLUMN "unit"`);
    }
}
exports.addUnitColumn1624097007488 = addUnitColumn1624097007488;
//# sourceMappingURL=1624097007488-addUnitColumn.js.map