import { Workout } from "../models/workout.js";

function newWorkout(req, res)  {
    res.render('workouts/new', {
        title: 'Add Workout',
    })
}

export {
    newWorkout as new,
}