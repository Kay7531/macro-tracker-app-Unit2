import { Router } from 'express'
import * as workoutsCtrl from '../controllers/workouts.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()


//POST localhost:3000/workouts
router.post('/', isLoggedIn, workoutsCtrl.create)
//GET localhost:3000/workouts/new
router.get('/new', workoutsCtrl.new)
//GET localhost:3000/workouts
router.get('/', workoutsCtrl.index)
// POST localhost:3000/workouts
router.post('/', workoutsCtrl.create)
// GET localhost:3000/workouts/:id
router.get('/:id', workoutsCtrl.show)
//PUT localhost:3000/workouts/:id
router.put('/:id', workoutsCtrl.update)
//DELETE localhost:3000/workouts/:id
router.delete('/:id', workoutsCtrl.delete)
//GET localhost:3000/workouts/:id/edit
router.get('/:id/edit', workoutsCtrl.edit)

export {
  router
}