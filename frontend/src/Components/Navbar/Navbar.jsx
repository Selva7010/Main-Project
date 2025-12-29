import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { Store } from '../../Context/Store'
import { Navigate } from 'react-router-dom'


const Navbar = ({ setShowLogin }) => {

  const navigate = useNavigate()
  const {getTotalAmount, cartItems, token, setToken}=useContext(Store)
  const [menu, setMenu] = useState("Home")

  const logout = ()=>{
    localStorage.removeItem('token')
    setToken("")
    navigate('/')
  }

 

  return (
    <>
      <div className='flex justify-center'>
        <div className='flex items-center justify-between w-7xl mt-5 flex-col lg:flex-row md:flex-row'>
          <Link to="/"><img className='w-70' src={assets.logo} alt="" /></Link>
          <div className="menu">
            <ul className='flex'>
              <Link to='/'><li
                onClick={() => setMenu("Home")}
                className={`p-3 cursor-pointer border-b-2 
              ${menu === "Home" ? "border-b-red-500 text-red-500" : "border-b-transparent"}`}>
                Home
              </li> 
              </Link>

              <Link to='/order-place'><li
                onClick={() => setMenu("Menu")}
                className={`p-3 cursor-pointer border-b-2 
              ${menu === "Menu" ? "border-b-red-500 text-red-500" : "border-b-transparent"}`}>
                Menu
              </li>
              </Link>
            
              <Link to='/footer'>
              <li
                onClick={() => setMenu("Contact")}
                className={`p-3 cursor-pointer border-b-2 
              ${menu === "Contact" ? "border-b-red-500 text-red-500" : "border-b-transparent"}`}>
                Contact
              </li>
              </Link>
            </ul>

          </div>
          <div className="navbar flex items-center mt-5">
            {/* <input className='px-5 py-2 border border-gray-400 outline-none rounded-full mr-5' type="text" placeholder='Search Items'/>
            <img src={assets.search_icon} alt="" className='mr-10' /> */}
            <div className="navbar-cart mr-10 flex ">
              <Link to="/cart"><img className='w-6' src={assets.basket_icon} alt="" /></Link>
              {getTotalAmount()===0 ? "" : <p className='w-3 h-3 bg-red-500 rounded-full'></p>}
            </div>

            {!token ? <button onClick={() => setShowLogin(true)} className='border border-gray-300 px-10 py-3 rounded-4xl cursor-pointer hover:bg-red-500 hover:text-white'>SignIn</button>
            :<div className='xl:flex items-center flex flex-row'>
              <img className='w-12 rounded-full h-13 mr-3' src={assets.profile_icon} alt="" />
              <Link to='/myOrder'><h2 className='mr-2'>My Orders</h2></Link>
              <img  onClick={logout} src={assets.logout_icon} alt="" />
              
              
            </div>
            }

            
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar


