import express from 'express'
import AuthMiddleware from '../middleware/auth.js'
import { listOrders, PlaceOrder, statusUpdate, userOrders, verifyOrder } from '../controllers/OrderCOntroller.js'


const OrderRoute = express.Router()

OrderRoute.post('/placeorder', AuthMiddleware, PlaceOrder)
OrderRoute.post('/verify', verifyOrder)
OrderRoute.post('/myOrders', AuthMiddleware,userOrders)
OrderRoute.get('/listOrders', listOrders)
OrderRoute.post('/Status', statusUpdate)

export default OrderRoute