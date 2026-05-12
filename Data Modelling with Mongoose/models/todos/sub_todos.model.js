//Making a model in mongoose

import mongoose from 'mongoose'

//Schema is a method that takes object
const userSchema = new mongoose.Schema({})

//model() takes 2 parameters , kiya model banaun or kiske base pe banaon , basis defined already which is userSchema
export const User = mongoose.model("User" , userSchema)