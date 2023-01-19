import { Router } from "express"
import * as goalsCtrl from '../controllers/goals.js'
import { isLoggedIn } from '../middleware/middleware.js'


const router = Router()

//POST localhost:3000/goals
router.post('/', isLoggedIn, goalsCtrl.create)
//GET localhost:3000/goals
router.get('/', goalsCtrl.index)
//GET localhost:3000/goals/new
router.get('/new',goalsCtrl.new)
//POST localhost:3000/goals
router.post('/', goalsCtrl.create)
//GET localhost:3000/goals/:id
router.get('/:id', goalsCtrl.show)
//DELETE localhost:3000/goals/:id
router.delete('/:id', goalsCtrl.delete)
//GET localhost:3000/goals/:id
router.put('/:id',goalsCtrl.update)
//GET localhost:3000/goals/:id/edit
router.get('/:id/edit', goalsCtrl.edit)



export {
    router
}