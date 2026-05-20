import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        default: 0
    },

    stock: {
        type: Number,
        default: 0
    },

    productImage: { //there are some ways tostore image but we can upload it on any cloud and take its url which is in string format

        type: String
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },

    owner: {
        type: mongoose.Scehma.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true });


export const Product = mongoose.model("Product", productSchema)