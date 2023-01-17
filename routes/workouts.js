import { Router } from 'express'
import * as workoutsCtrl from '../controllers/workouts.js'

const router = Router()

//GET localhost:3000/workouts/new
router.get('/new', workoutsCtrl.new)
//GET localhost:3000/workouts
router.get('/', workoutsCtrl.index)
// POST localhost:3000/workouts
router.post('/', workoutsCtrl.create)
// GET localhost:3000/workouts/:id
router.get('/:id', workoutsCtrl.show)
//DELETE localhost:3000/workouts/:id
router.delete('/:id', workoutsCtrl.delete)

export {
  router
}