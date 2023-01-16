import { Router } from 'express'
import * as workoutsCtrl from '../controllers/workouts.js'

const router = Router()

//GET localhost:3000/workouts/new
router.get('/new', workoutsCtrl.new)
// POST localhost:3000/workouts
router.post('/', workoutsCtrl.create)

export {
  router
}