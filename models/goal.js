import mongoose from "mongoose"

const Schema = mongoose.Schema

const goalSchema = new Schema({
    netCarbsGoal:{
        type: Number,
        required: true,
    },
    protienGoal:{
        type: Number,
        required: true,
    },
    fatsGoal:{
        type: Number,
        required: true,
    },
    calGoal:{
        type: Number,
        required: true,
    },

})

const Goal = mongoose.model('Goal', goalSchema)

export{
    Goal
}