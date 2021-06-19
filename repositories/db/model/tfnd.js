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
            const likeName = `%${name}%`;
            const result = await this.client.getRepository(TNFD_1.TNFD).createQueryBuilder('tnfd').select().where('name like :name', { name: likeName }).getMany();
            return result;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.ModelTNFD = ModelTNFD;
//# sourceMappingURL=tfnd.js.map