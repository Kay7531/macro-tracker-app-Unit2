import mongoose from 'mongoose'

const Schema = mongoose.Schema

const foodSchema = {
    name: {
        type: String,
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
    date: {
        type: Date,
    },
}

const Food = mongoose.model('Food', foodSchema)

export {
    Food
}