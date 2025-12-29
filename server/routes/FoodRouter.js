import express from 'express'
import { addList, deleteList, getAllList } from "../controllers/FoodController.js";
import multer from "multer";

const FoodRouter = express.Router()

// Image Upload

const Storage = multer.diskStorage({
    destination:"uploads",
    filename:(req, file, cb) =>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:Storage})

FoodRouter.post('/add', upload.single("image") ,addList)
FoodRouter.get('/getAllList', getAllList)
FoodRouter.post('/deleteData', deleteList)




export default FoodRouter
