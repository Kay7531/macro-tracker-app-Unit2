import mongoose from 'mongoose'

const Schema = mongoose.Schema

const foodSchema = {
    name: {
        type: String,
        required: true,
    },
    totalCal: {
        type: Number,
    },
    netCarbs: {
        type: Number,
    },
    protein: {
        type: Number,
    },
    fat: {
        type: Number,
    },
    serving: {
        type: Number,
    },
    date: {
        type: Date,
    },
}

const Food = mongoose.model('Food', foodSchema)

export {
    Food
}