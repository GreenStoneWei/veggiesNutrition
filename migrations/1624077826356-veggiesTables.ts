import {MigrationInterface, QueryRunner} from "typeorm";

export class veggiesTables1624077826356 implements MigrationInterface {
    name = 'veggiesTables1624077826356'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "recipe" ("id" SERIAL NOT NULL, "name" text NOT NULL, "ingredientId" integer NOT NULL, "quantity" real NOT NULL, CONSTRAINT "PK_e365a2fedf57238d970e07825ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "food_ingredient" ("id" SERIAL NOT NULL, "name" text NOT NULL, "categoryId" integer NOT NULL, "nutritionItem" integer NOT NULL, "content" real NOT NULL, CONSTRAINT "PK_968daeaf2cb7f0c8c868bbd7080" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "food_category" ("id" SERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_12d79e4940385900bdee7453bd0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tnfd" ("id" SERIAL NOT NULL, "foodCategory" text NOT NULL, "dataCategory" text NOT NULL, "idNum" text NOT NULL, "name" text NOT NULL, "otherName" text NOT NULL, "analyzedCategory" text NOT NULL, "analyzedItem" text NOT NULL, "unit" text NOT NULL, "qtyPerHundredGram" text NOT NULL, CONSTRAINT "PK_e3ef92e6f423b2a30eb59f397e8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "recipe" ADD CONSTRAINT "FK_96b31d139569e3b031ec54339a9" FOREIGN KEY ("ingredientId") REFERENCES "food_ingredient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "food_ingredient" ADD CONSTRAINT "FK_4e4c0c0a4cbf34dc2acb848c4ed" FOREIGN KEY ("categoryId") REFERENCES "food_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "food_ingredient" DROP CONSTRAINT "FK_4e4c0c0a4cbf34dc2acb848c4ed"`);
        await queryRunner.query(`ALTER TABLE "recipe" DROP CONSTRAINT "FK_96b31d139569e3b031ec54339a9"`);
        await queryRunner.query(`DROP TABLE "tnfd"`);
        await queryRunner.query(`DROP TABLE "food_category"`);
        await queryRunner.query(`DROP TABLE "food_ingredient"`);
        await queryRunner.query(`DROP TABLE "recipe"`);
    }

}
