import { Goal } from "../models/goal.js"


function newGoal(req, res) {
    res.render('goals/new', {
        title: 'Add Goal'
    })
}


export {
    newGoal as new,
}