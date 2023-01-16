import mongoose from 'mongoose'

const Schema = mongoose.Schema

const activitySchema = new Schema({
    name: {
        type: String,
    },
    duration: {
        type: Number,
    },
    calLost: {
        type: Number,
    },
    date: {
        type: Date,
    },
},{
    timestamps:true
})

const Activity = mongoose.model('Activity', activitySchema)

export {
    Activity
}