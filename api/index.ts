import { Router } from 'express'

import tutor from './tutor'
import tutors from './tutors'

const router = Router()

router.use(tutor)
router.use(tutors)

export = router
