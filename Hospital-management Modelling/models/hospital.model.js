import mongoose from "mongoose";


const hospitalSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    },

    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
    }
}, { timestamps: true });


export const Hospital = mongoose.model("Hospital", hospitalSchema);