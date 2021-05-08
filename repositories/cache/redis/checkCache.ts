import redis from './index'
const PREFIX = 'TutorsAPI:tutors:'

export async function set(key: string, data: any) {
  try {
    return redis.getClient().set(`${PREFIX}:${key}`, JSON.stringify(data))
  } catch (error) {
    throw new Error(error)
  }
}

export async function get(key: string): Promise<any> {
  try {
    const result = await redis.getClient().get(`${PREFIX}:${key}`)
    return result ? JSON.parse(result) : null
  } catch (error) {
    throw new Error(error)
  }
}
