import mongoose from "mongoose";


const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    addressLine1: {
        type: String,
        required: true
    },

    addressLine2: {
        type: String,
    },

    city: {
        type: String,
        required: true
    },

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