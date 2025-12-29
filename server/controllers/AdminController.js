import AdminModel from '../models/adminModel.js'
import bcrypt from 'bcrypt'
import validator from 'validator'
import jwt from 'jsonwebtoken'


// Login

export const Login = async(req, res) => {
    const {email, password} = req.body

    try {
        if(!email || !password){
            return res.json({success:false, message:'Feilds Empty!'})
        }

        const user = await AdminModel.findOne({email})
        if(!user){
            return res.json({success:false, message:'Invalid User'})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.json({success:false, message:'Invalid Password'})
        }
        const token = createToken(user._id)
        res.json({success:true, token, message:'Login Successfully'})


    } catch (error) {
        console.log(error)
        res.json({success:false, message:Error})
        
    }

}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

export const Register = async (req, res) => {
    const { name, email, password } = req.body

    try {
        const exist = await AdminModel.findOne({ email })

        if (exist) {
            return res.json({ success: false, message: 'Email Already Exist' })
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: 'Please Enter Valid Email' })
        }

        if (password.length < 8) {
            return res.json({ success: false, message: 'Please Enter Strong Password' })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new AdminModel({
            name: name,
            email: email,
            password: hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({ success: true, token, message:'User Successfully Register' })

    } catch (error) {
        console.log(error);

        res.json({ success: false, message: 'Error' })
    }



}