import { Router } from 'express'
import { getTutors } from './controller'

const api = Router()

api.get('/tutors/:languageSlug', getTutors)

export = api
