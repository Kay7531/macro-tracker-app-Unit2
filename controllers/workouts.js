import { Workout } from "../models/workout.js";

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

export {
    newWorkout as new,
    create,
}