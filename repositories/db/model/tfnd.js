"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelTNFD = void 0;
const TNFD_1 = require("../../../entities/TNFD");
class ModelTNFD {
    constructor(client) {
        this.tag = 'db/model/tnfd';
        this.find = async (options) => {
            return this.client.getRepository(TNFD_1.TNFD).find(options);
        };
        this.client = client;
    }
    async getByName(name) {
        try {
            // const likeName = `%${name}%`
            const result = await this.client.getRepository(TNFD_1.TNFD).createQueryBuilder('tnfd').select().where('name = :name', { name }).getMany();
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async getOmege3ByIngredient(ingredientName) {
        try {
            const likeName = `%${ingredientName}%`;
            const result = await this.client
                .getRepository(TNFD_1.TNFD)
                .createQueryBuilder('tnfd')
                .select()
                .where('1 = 1')
                .andWhere('analyzedItem IN (...:omega)', {
                omega: ['次亞麻油酸(18:3)', '十八碳四烯酸(18:4)', '花生油酸(20:4)', '廿碳五烯酸(20:5)', '廿二碳五烯酸(22:5)', '廿二碳六烯酸(22:6)']
            })
                .andWhere('name like :name', { name: likeName })
                .getMany();
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async getOmege6ByIngredient(ingredientName) {
        try {
            const likeName = `%${ingredientName}%`;
            const result = await this.client
                .getRepository(TNFD_1.TNFD)
                .createQueryBuilder('tnfd')
                .select()
                .where('1 = 1')
                .andWhere('analyzedItem IN (...:omega)', {
                omega: ['亞麻油酸(18:2)', '花生油酸(20:4)']
            })
                .andWhere('name like :name', { name: likeName })
                .getMany();
            return result;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.ModelTNFD = ModelTNFD;
//# sourceMappingURL=tfnd.js.map