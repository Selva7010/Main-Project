import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { Store } from '../../Context/Store'
import axios from 'axios'


const Login = ({setShowLogin}) => {

    const {url, setToken} = useContext(Store)

    const [currentState, setCurrentState]=useState("Login")
    const [data, setData] = useState({
        name:"",
        email:"",
        password:""
    })
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

    const onchangeHandler = (event)=>{
        const name = event.target.name
        const value = event.target.value
        setData(data=>({...data,[name]:value}))
    }


    const Login = async(event)=>{
        event.preventDefault()

        let newUrl = url  
        if(currentState === "Login"){
            newUrl += "/api/user/login"
        }
        else{
            newUrl += "/api/user/register"
        }
        const response = await axios.post(newUrl, data)
        if(response.data.success){
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token)
            setShowLogin(false)
            
        }
        else{
            setError(response.data.message)
        }
    }









  return (
    <div className='absolute bg-black w-full h-svh z-1 opacity-90 flex justify-center '>
        <div className='text-black m-auto bg-white p-5'>
            <div className="close flex justify-end">
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
           
        <div className="title flex justify-center">
                <h1 className='text-2xl font-bold text-red-500'>{currentState}</h1>
        </div>
        <div className="form">
            {error && <div className='text-center text-red-500 mt-5'>{error}</div>}
            <form onSubmit={Login}>
                <div className="inputs flex flex-col mt-5">
                    {currentState==="Login"?<></>:<input onChange={onchangeHandler} name='name' value={data.name} className='border-b border-b-gray-600 p-3' type="text" placeholder='Enter your name' />}
                    <input onChange={onchangeHandler} name='email' value={data.email} className='border-b border-b-gray-600 p-3' type="email" placeholder='Enter your Email' />
                    <input onChange={onchangeHandler} name='password' value={data.password} className='border-b border-b-gray-600 p-3' type="password" placeholder='Enter your Password' />
                </div>
                <div className="submit-button flex justify-center">
                    <button className='bg-red-500 px-10 py-3 rounded-full mt-5 text-white font-bold text-center cursor-pointer'>{currentState==="SignUp"?"SignIn" : "Login"}</button>
                </div>    
                <div className="checkbox flex gap-5 mt-5">
                    <input type="checkbox" className=''/>
                    <p>I Agree your Terms and Conditions</p>
                </div>
                <div></div>
                {currentState==="SignUp"?<div className='flex justify-between mt-3 items-center'><p>You have a Account?</p><span className='cursor-pointer text-red-500 text-xl font-bold' onClick={(e)=>setCurrentState("Login")}>Login</span></div>:<div className='flex justify-between mt-3 items-center'><p>Create Accounts </p><span className='cursor-pointer text-red-500 text-xl font-bold' onClick={()=>setCurrentState("SignUp")}>Register</span></div>}
            </form>
        </div>
    </div>
    </div>
  )
}

export default Login
