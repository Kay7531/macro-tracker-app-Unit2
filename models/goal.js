import mongoose from "mongoose"

const Schema = mongoose.Schema

const goalSchema = new Schema({
    carbsGoal: {
        type: Number,

    },
    protienGoal: {
        type: Number,

    },
    fatsGoal: {
        type: Number,

    },
    calGoal: {
        type: Number,

    },
    owner: { type: Schema.Types.ObjectId, ref: "Profile" }

}, {
    timestamps: true
})

const Goal = mongoose.model('Goal', goalSchema)

export {
    Goal
}
