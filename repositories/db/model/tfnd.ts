import { Connection } from 'typeorm'
import { Entity, Column, PrimaryColumn } from 'typeorm'
import { TNFD } from '../../../entities/TNFD'
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

export class ModelTNFD {
  client: Connection
  tag: string = 'db/model/tnfd'

  constructor(client: Connection) {
    this.client = client
  }

  async getByName(name: string): Promise<TNFD[]> {
    try {
      const likeName = `%${name}%`
      const result = await this.client.getRepository(TNFD).createQueryBuilder('tnfd').select().where('name like :name', { name: likeName }).getMany()
      return result
    } catch (error) {
      throw error
    }
  }
}
