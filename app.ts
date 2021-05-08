import express from 'express'
import { json as bodyParserJson, urlencoded as bodyParserUrlencoded } from 'body-parser'
import api from './api'
const version = require('./package.json').version

const app = express()
app.use(bodyParserJson({ limit: '1mb' }))
app.use(bodyParserUrlencoded({ limit: '1mb', extended: false }))

app.get('/', (_req, res) => {
  res.send({ version })
})

app.use('/api', api)

export default app
