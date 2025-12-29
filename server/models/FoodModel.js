import mongoose from "mongoose";


const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    }
})

const FoodModel = mongoose.models.foodorders || mongoose.model('foodorders', foodSchema)

export default FoodModel