import express from 'express'
import dotenv from 'dotenv/config'
import cors from 'cors'
import connectDB from './config/dp.js'
import FoodRouter from './routes/FoodRouter.js'
import UserRouter from './routes/UserRoutes.js'
import CartRouter from './routes/CartRouter.js'
import OrderRoute from './routes/OrderRouter.js'
import AdminRoute from './routes/AdminRoute.js'



const app = express()
const port = 4000

// Middleware

app.use(express.json())
app.use(cors())


// Database connection
connectDB()

app.use('/api/food', FoodRouter)
app.use('/uploads', express.static('uploads'));
app.use('/api/user', UserRouter)
app.use('/api/admin', AdminRoute)
app.use('/api/cart', CartRouter)
app.use('/api/orders', OrderRoute)



app.get('/', (req, res)=>{
    res.send("API is Working")
})

app.listen(port, ()=>console.log(`Server is Started ${port}`))