import http from 'http'
import app from './app'

async function main() {
  // TODO: init redis
  // TODO: init db
  const server = http.createServer(app)
  server.listen(3000) // TODO: config?
}

main().catch(console.error)
