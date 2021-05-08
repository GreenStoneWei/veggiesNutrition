import config from 'config'
import http from 'http'
import app from './app'
import db from './repositories/db'
import redis from './repositories/cache/redis'

async function main() {
  await db.connect(config.get('db'), { needSync: false })
  await db.checkConnection()

  redis.init()
  await redis.checkConnection()

  const server = http.createServer(app)
  server.listen(config.get('port'))
  console.log('Tutors API listening on port:3000')
}

main().catch(console.error)
