import express from 'express'
import * as controller from '../controllers/rate.controller.js'

const router = express.Router()

// router.post('/', controller.store)
// router.get('/', controller.index)
router.get('/:base', controller.show)


export default router