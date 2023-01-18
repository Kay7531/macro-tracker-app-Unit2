import { Goal } from "../models/goal.js"

function index(req, res) {
    Goal.find({})
    .then(goals => {
        res.render('goals/index', {
            title: "Goals",
            goals: goals
        })
    })
    .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function newGoal(req, res) {
    res.render('goals/new', {
        title: 'Add Goal'
    })
}

function create(req, res) {
    Goal.create(req.body)
    .then(goal => {
        res.redirect('/goals')
    })
    .catch(err => {
        console.log(err)
        res.redirect('/goals')
    })

}
function show(req, res) {
    Goal.findById(req.params.id)
    .then(goal => {
      res.render('goals/show', { 
        title: 'Goal Detail', 
        goal: goal,
      })    
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
  }
export {
    index,
    newGoal as new,
    create,
    show,
}