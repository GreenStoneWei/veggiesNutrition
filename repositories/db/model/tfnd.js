"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelTNFD = void 0;
const TNFD_1 = require("../../../entities/TNFD");
// @Entity()
// export class TNFD {
//   @PrimaryColumn({
//     type: 'int'
//   })
//   id: number
//   @Column({
//     type: 'text'
//   })
//   foodCategory: string
//   @Column({
//     type: 'text'
//   })
//   dataCategory: string
//   @Column({
//     type: 'text'
//   })
//   idNum: string
//   @Column({
//     type: 'text'
//   })
//   name: string
//   @Column({
//     type: 'text'
//   })
//   otherName: string
//   @Column({
//     type: 'text'
//   })
//   analyzedCategory: string
//   @Column({
//     type: 'text'
//   })
//   analyzedItem: string
//   @Column({
//     type: 'text'
//   })
//   unit: string
//   @Column({
//     type: 'text'
//   })
//   qtyPerHundredGram: string
// }
class ModelTNFD {
    constructor(client) {
        this.tag = 'db/model/tnfd';
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