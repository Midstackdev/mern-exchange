import express from 'express'
import * as controller from '../controllers/transaction.controller.js'

const router = express.Router()

router.post('/', controller.store)
router.get('/', controller.index)
router.get('/:id', controller.show)


export default router