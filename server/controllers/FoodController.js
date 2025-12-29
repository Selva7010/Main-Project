import FoodModel from "../models/FoodModel.js";

import fs from 'fs'

export const addList = async (req, res) =>{

    let image_filename = `${req.file.filename}`


    const Food = new FoodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        rating:req.body.rating,
        image:image_filename
    })
    try {
        await Food.save()
        res.json({success:true, message:'Data Successfully added'})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:'Error'}) 
    }

}

export const getAllList = async (req, res) =>{
    try {
        const food = await FoodModel.find({})
        res.json({success:true, data:food})
    } catch (error) {
        res.json({success:false, message:'Data Get Failed'})        
    }
}

export const deleteList = async (req, res)=>{
    try {
        const removeFood = await FoodModel.findById(req.body.id)
        fs.unlink(`uploads/${removeFood.image}`, ()=>{})

        await FoodModel.findByIdAndDelete(req.body.id)
        res.json({success:true, message:'Data Successfully Deleted'})
    } catch (error) {
        res.json({success:false, message:'Error'})
    }
}