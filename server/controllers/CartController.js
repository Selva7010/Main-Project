import UserModel from "../models/UserModel.js";

export const AddToCart = async(req, res)=>{
    
    try {
        let userData = await UserModel.findById(req.body.userId)
        if(!userData){
            return res.json({success:false, message:"User Not Found"})
        }
        let CartData = await userData.cartData
        if(!CartData[req.body.itemId]){
            CartData[req.body.itemId] = 1
        }
        else{
            CartData[req.body.itemId] += 1
        }

        await UserModel.findByIdAndUpdate(req.body.userId, {cartData:CartData})
        res.json({success:true, message:'Added to Cart'})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:'Error'})
        
    }

}



export const RemoveFromCart = async(req, res)=>{
    try {
        let userData = await UserModel.findById(req.body.userId)
        if(!userData){
            return res.json({success:false, message:'User Not Found'})
        }
        let CartData = await userData.cartData
        if(CartData[req.body.itemId]>0){
            CartData[req.body.itemId] -= 1
        }
        else{
            res.json({success:false, message:'Item Not Found'})
        }
        await UserModel.findByIdAndUpdate(req.body.userId, {cartData:CartData})
        res.json({success:true, message:'Removed from Cart'})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:'Error'})
        
    }
}

export const getCart = async(req, res)=>{
    try {
        let userData = await UserModel.findById(req.body.userId)
        if(!userData){
            return res.json({success:false, message:'User Not Found'})
        }
        let CartData = await userData.cartData
        res.json({success:true, CartData})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:'Error'})
        
    }
}