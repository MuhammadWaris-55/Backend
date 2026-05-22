import mongoose from 'mongoose';


//For orderItems we have to make another schema here also known as mini model , which hels us define order structure
//we are making Schema here because its used is only here if we want to use it in other models too then we have to make it in a separate file
const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})


const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true
    },

    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    orderItems: {
        type: [orderItemSchema] //this is same as making an object in array and passiing referance
    },

    address: {
        type: String,
        required: true
    },

    status: {
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"], //it gives us choices but it bounds that we have to take a choice only from this , if spelling mistake or anything changed that the value won't go in status
        default: "PENDING"
    }

}, { timestamps: true })


export const Order = mongoose.model("Order", orderSchema)