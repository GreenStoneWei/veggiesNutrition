import http from 'http'
import app from './app'

async function main() {
  // TODO: init redis
  // TODO: init db
  const server = http.createServer(app)
  server.listen(3000)
  console.log('Tutors API listening on port:3000')
}

main().catch(console.error)
