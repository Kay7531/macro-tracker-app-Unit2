import mongoose from 'mongoose'
import { Food } from '../models/food.js'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  avatar: String,
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}

