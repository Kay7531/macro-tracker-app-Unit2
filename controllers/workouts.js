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


function newWorkout(req, res) {
    res.render('workouts/new', {
        title: 'Add Workout',
    })
}

function create(req, res) {
    req.body.owner = req.user.profile._id
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
        .populate('owner')
        .then(workout => {
            res.render('workouts/show', {
                title: 'Workout Detail',
                workout: workout
            })
        })
        .catch(err => {
            console.log(err)
            res.redirect("/")
        })

}


function deleteWorkout(req, res) {
    Workout.findById(req.params.id)
        .then(workout => {
            if (workout.owner.equals(req.user.profile._id)) {
                workout.delete()
                    .then(() => {
                        res.redirect('/workouts')
                    })
            } else {
                throw new Error('🚫 Not authorized 🚫')
            }

        })
        .catch(err => {
            console.log(err)
            res.redirect("/workout")
        })
}

function edit(req, res) {
    Workout.findById(req.params.id)
        .then(workout => {
            res.render('workouts/edit', {
                workout,
                title: 'Edit Workout'
            })
        })
        .catch(err => {
            console.log(err)
            res.redirect('/')
        })
}

function update(req, res) {
    Workout.findById(req.params.id)
        .then(workout => {
            if (workout.owner.equals(req.user.profile._id)) {
                workout.updateOne(req.body)
                    .then(() => {
                        res.redirect(`/workouts/${workout._id}`)
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
    newWorkout as new,
    create,
    show,
    deleteWorkout as delete,
    edit,
    update
}

