import mongoose from "mongoose";


const medicalSchema = new mongoose.Schema({} , {timestamps: true});


export const Medical_Record = mongoose.model("Medical_Record" , medicalSchema);