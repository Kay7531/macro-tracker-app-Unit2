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
  req.body.owner = req.user.profile._id
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
    .populate('owner')
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

function deleteGoal(req, res) {
  Goal.findById(req.params.id)
    .then(goal => {
      if (goal.owner.equals(req.user.profile._id)) {
        goal.delete()
          .then(() => {
            res.redirect('/goals')
          })
      } else {
        throw new Error('🚫 Not authorized 🚫')
      }

    })
    .catch(err => {
      console.log(err)
      res.redirect("/goals")
    })
}

function edit(req, res) {
  Goal.findById(req.params.id)
    .then(goal => {
      res.render("goals/edit", {
        goal,
        title: "Edit Goal"
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
}

function update(req, res) {
  Goal.findById(req.params.id)
    .then(goal => {
      if (goal.owner.equals(req.user.profile._id)) {
        goal.updateOne(req.body)
          .then(() => {
            res.redirect(`/goals/${goal._id}`)
          })
      } else {
        throw new Error('🚫 Not authorized 🚫')
      }

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
  deleteGoal as delete,
  edit,
  update
}
