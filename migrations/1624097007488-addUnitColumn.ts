import {MigrationInterface, QueryRunner} from "typeorm";

export class addUnitColumn1624097007488 implements MigrationInterface {
    name = 'addUnitColumn1624097007488'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "food_ingredient" ADD "unit" character varying(6) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "food_ingredient" DROP COLUMN "nutritionItem"`);
        await queryRunner.query(`ALTER TABLE "food_ingredient" ADD "nutritionItem" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "food_ingredient" DROP COLUMN "nutritionItem"`);
        await queryRunner.query(`ALTER TABLE "food_ingredient" ADD "nutritionItem" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "food_ingredient" DROP COLUMN "unit"`);
    }

}
