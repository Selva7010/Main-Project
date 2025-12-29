import OrderModel from "../models/OrderModel.js";
import UserModel from "../models/UserModel.js";
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


export const PlaceOrder = async (req, res)=>{

    const frontend_url = "http://localhost:5173"

    try {
        const NewOrder = new OrderModel({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address
        })

        await NewOrder.save()
        await UserModel.findByIdAndUpdate(req.body.userId, {cartData:{}})

        const line_items = req.body.items.map((item)=>({
            price_data:{
                currency:'inr',
                product_data:{
                    name:item.name
                },
                unit_amount:item.price*100
            },
            quantity:item.quantity
        }))
        line_items.push({
            price_data:{
                currency:'inr',
                product_data:{
                    name:'Delivery Fee'
                },
                unit_amount:40*100
            },
            quantity:1
        })

        const session = await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:'payment',
            success_url:`${frontend_url}/verify?success=true&orderId=${NewOrder._id}`,
            cancel_url:`${frontend_url}/verify?success=false&orderId=${NewOrder._id}`
            // success_url: `${frontend_url}/`,
            // cancel_url: `${frontend_url}/cart`

        })
        res.json({success:true, session_url:session.url})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:'Error'})
        
    }
}

export const verifyOrder = async (req, res) =>{
    const {orderId, success} = req.body

    try {
        if(success=="true"){
            await OrderModel.findByIdAndUpdate(orderId, {payment:true})
            res.json({success:true, message:"Paid"})
        }
        else{
            await OrderModel.findByIdAndDelete(userId)
            res.json({success:false, message:"Not Paid"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
        
    }
}

export const userOrders = async(req, res)=>{
    try {
        const users = await OrderModel.find({userId:req.body.userId})
        res.json({success:true, data:users})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:'Error'})
        
    }
}

export const listOrders = async (req, res)=>{
    try {
        const oredrs = await OrderModel.find({})
        res.json({success:true, data:oredrs})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:'Error'})
        
    }
}
export const statusUpdate = async(req, res)=>{
    try {
        await OrderModel.findByIdAndUpdate(req.body.orderId, {status:req.body.status})
        res.json({success:true, message:'Status Updated'})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:'Error'})
        
    }
}