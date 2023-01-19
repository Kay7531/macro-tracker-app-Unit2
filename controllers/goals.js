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
    Goal.findByIdAndDelete(req.params.id)
    .then(goal => {
        res.redirect('/goals')
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
  for(let key in req.body) {
    if(req.body[key] === "") delete req.body[key]
}
  Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(goal => {
    res.redirect(`/goals/${goal._id}`)
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