import express from 'express'
import { Login, Register } from '../controllers/UserController/UserController.js'


const UserRouter = express.Router()

UserRouter.post('/login', Login)
UserRouter.post('/register', Register)

export default UserRouter