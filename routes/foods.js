import { Router } from 'express'
import * as foodsCtrl from '../controllers/foods.js'

const router = Router()

router.get('/', foodsCtrl.index)
// GET localhost:3000/foods/choice
router.get('/choice', foodsCtrl.choice)

export {
  router
}