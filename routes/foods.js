import { Router } from 'express'
import * as foodsCtrl from '../controllers/foods.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', foodsCtrl.index)

//POST localhost:3000/foods
// router.post('/', isLoggedIn, foodsCtrl.create)
// GET localhost:3000/foods/choice
router.get('/choice', foodsCtrl.choice)
// GET localhost:3000/foods/new
router.get('/new', foodsCtrl.new)
//POST localhost:3000/foods
router.post('/', foodsCtrl.create)
// GET localhost:3000/foods/:id
router.get('/:id', foodsCtrl.show)
//DELETE localhost:3000/foods/:id
router.delete('/:id', foodsCtrl.delete)
// GET localhost:3000/foods/:id/edit
router.get("/:id/edit", foodsCtrl.edit)




export {
  router
}