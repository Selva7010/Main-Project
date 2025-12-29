import express from 'express'
import { Login, Register } from '../controllers/AdminController.js'



const AdminRoute = express.Router()

AdminRoute.post('/login', Login)
AdminRoute.post('/register', Register)

export default AdminRoute