//Making a model in mongoose

import mongoose from 'mongoose'

//Schema is a method that takes object
const userSchema = new mongoose.Schema(
    // { //This is basic way of Storing Data Fields
    //     username: String,
    //     email: String,
    //     isActive: Boolean,
    //     Password: String,
    //     Age: Integer
    // },
    {//This is more Professional way
        username : {
            type : String,
            required : true,
            unique : true
        },
        email : {
            type : String,
            required : true
        },
        password : {
            type : String,
            required : true,
            unique : true
        },
        age : {
            type : Integer,
            required : false
        }
    }
)  //Schema = Blueprint / Template
// It defines the structure of your data — what fields exist, what type they are, and any rules.

//model() takes 2 parameters , kiya model banaun or kiske base pe banaon , basis defined already which is userSchema
export const User = mongoose.model("User" , userSchema)  //Model = The Worker built from that blueprint
// It's the actual tool you use to create, read, update, delete data in MongoDB.

//When this name "User" will go in database it will be changed in "users" , it is the standarized way in MongoDB that any name you give will be changed in plural and in lowercase