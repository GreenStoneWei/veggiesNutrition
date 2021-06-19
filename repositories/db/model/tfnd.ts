import { Connection, Repository } from 'typeorm'
import { TNFD } from '../../../entities/TNFD'
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

  find: Repository<TNFD>['find'] = async (options: any) => {
    return this.client.getRepository(TNFD).find(options)
  }
}
