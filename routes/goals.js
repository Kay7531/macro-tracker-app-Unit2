import { Router } from "express"
import * as goalsCtrl from '../controllers/goals.js'

const router = Router()

//GET localhost:3000/goals/new
router.get('/new',goalsCtrl.new)
//POST localhost:3000/goals
router.post('/', goalsCtrl.create)
//GET localhost:3000/goals/:id
router.get('/:id', goalsCtrl.show)

export {
    router
}