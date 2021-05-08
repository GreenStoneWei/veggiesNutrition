import express from 'express'
import { json as bodyParserJson, urlencoded as bodyParserUrlencoded } from 'body-parser'
const version = require('./package.json').version

const app = express()
app.use(bodyParserJson({ limit: '1mb' }))
app.use(bodyParserUrlencoded({ limit: '1mb', extended: false }))

app.get('/', (_req, res) => {
  res.send({ version })
})

export default app
