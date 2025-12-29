import mongoose from 'mongoose'

const OrderModel = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    items:{
        type:Array,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    address:{
        type:Object,
        required:true
    },
    status:{
        type:String,
        default:'Proccessing'
    },
    Date:{
        type:Date,
        default:Date.now()
    },
    payment:{
        type:Boolean,
        default:false
    }
})

const OrdersModel = mongoose.models.orders || mongoose.model('orders', OrderModel)
export default OrdersModel