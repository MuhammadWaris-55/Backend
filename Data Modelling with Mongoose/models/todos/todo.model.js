import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }, 
        complete: {
            type: Boolean,
            default: false
        },
        createdBy: { //In this line we r making a relation of todomodel with usermodel , it is necessary to give the ref of user same as name you defined in the model you r referring
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        subTodo: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "SubTodo"
            }
        ]
    }, {timestamps: true}
)

export const Todo = mongoose.model("Todo" , todoSchema)