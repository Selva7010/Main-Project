import express from 'express'
import { getUserData, Login, Register } from '../controllers/UserController/UserController.js'


const UserRouter = express.Router()

UserRouter.post('/login', Login)
UserRouter.post('/register', Register)
UserRouter.get('/userData', getUserData)

export default UserRouter