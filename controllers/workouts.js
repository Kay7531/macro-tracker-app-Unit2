import { Workout } from "../models/workout.js";
function index(req, res) {
    Workout.find({})
    .then(workouts => {
        res.render('workouts/index', {
            title: "All Workouts",
            workouts: workouts
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect("/")
      })
    }


function newWorkout(req, res)  {
    res.render('workouts/new', {
        title: 'Add Workout',
    })
}

function create(req, res) {
    Workout.create(req.body)
    .then(workout => {
        res.redirect('/workouts/')
    })
    .catch(err => {
        console.log(err)
        res.redirect('/workouts/')
    })
}

function show(req, res) {
    Workout.findById(req.params.id)
    .then(workout => {
       res.render('workouts/show', {
        title: 'Workout Detail',
        workout:workout
       })
    })
    .catch(err => {
        console.log(err)
        res.redirect("/")
      })
    
}


function deleteWorkout(req, res) {
    Workout.findByIdAndDelete(req.params.id)
    .then(workout => {
        res.redirect('/workouts')
    })
    .catch(err => {
        console.log(err)
        res.redirect('/workouts')
    })
}
export {
    index,
    newWorkout as new,
    create,
    show,
    deleteWorkout as delete,
}