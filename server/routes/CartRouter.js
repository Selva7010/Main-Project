import express from 'express'
import { AddToCart, getCart, RemoveFromCart } from '../controllers/CartController.js'
import AuthMiddleware from '../middleware/auth.js'


const CartRouter = express.Router()

CartRouter.post('/add',AuthMiddleware, AddToCart)
CartRouter.post('/remove',AuthMiddleware, RemoveFromCart)
CartRouter.post('/getCart',AuthMiddleware, getCart)

export default CartRouter