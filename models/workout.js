import mongoose from 'mongoose'

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    name: {
        type: String,
    },
    duration: {
        type: Number,
    },
    calsLost: {
        type: Number,
    },
    date: {
        type: Date,
    },
},{
    timestamps:true
})

const Workout = mongoose.model('Activity', workoutSchema)

export {
    Workout
}