import mongoose from "mongoose";


const NoOfHoursSchema = new mongoose.Schema({
    HoursOfWork: {
        type: Number,
        required: true
    },
    worksInHospitals: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }
})



const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    salary: {
        type: Number,
        required: true
    },

    qualification: {
        type: String,
        required: true
    },

    experienceInYears: {
        type: Number,
        default: 0,
    },

    worksInHospitals: {
        type: [NoOfHoursSchema]
    }
}, { timestamps: true });


export const Doctor = mongoose.model("Doctor", doctorSchema);