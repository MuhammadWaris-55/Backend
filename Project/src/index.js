import mongoose from "mongoose";
import { DB_NAME } from "./constants";

// Usign iife
( async => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    } catch (error) {
        console.log("ERROR :" + error)
        throw error
    }
})()