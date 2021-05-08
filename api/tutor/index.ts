import { Router } from 'express'
import { getBySlug } from './controller'

const api = Router()

api.get('/tutor/:slug', getBySlug)

export = api
