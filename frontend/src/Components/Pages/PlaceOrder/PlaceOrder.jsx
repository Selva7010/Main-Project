import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../Navbar/Navbar'
import { Store } from '../../../Context/Store'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

  const { getTotalAmount, token, food_list, cartItems, url } = useContext(Store)

  const [data, setData] =useState({
    name:"",
    email:"",
    street:"",
    city:"",
    pincode:"",
    phone:""
  })
  
  const onChangeHandler = (event)=>{
    const name = event.target.name
    const value = event.target.value
    setData(data=>({...data,[name]:value}))
  }


  const placeOrder = async(event) =>{
    event.preventDefault()

    let orderItems = []
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo =  item
        itemInfo['quantity'] = cartItems[item._id]
        orderItems.push(itemInfo)
      }
    })
    
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalAmount()+40
    }

    console.log(orderData);
    let response = await axios.post(url+'/api/orders/placeorder', orderData, {headers:{token}})
    
    
    if(response.data.success){
      const {session_url} = response.data
      window.location.replace(session_url)
      
    }
    else{
      alert("Error")
    }
    
  }
  const navigate = useNavigate()
  useEffect(()=>{
    if(!token){
      navigate('/cart')
    }
  })


  return (
    <div>
      <Navbar />
      <div className="placeorder mt-10 mb-10 flex justify-center">
        <div className="xl:w-7xl">
          <form onSubmit={placeOrder} className='xl:flex xl:justify-between items-center'>
            <div className="form w-sm xl:w-xl">
              <h1 className='text-center text-xl font-bold mb-5 text-red-500'>Delivery Address</h1>
              <div className="name-email flex">
                <div className='mr-2 w-full'>
                  <label className=''>Name:</label>
                  <input name='name' onChange={onChangeHandler} value={data.name} className='w-full border border-gray-400 p-3 mb-2  mt-2' type="text" placeholder='Name' required/>
                </div>
                <div className="email w-full ">
                  <label className=''>Email:</label>
                  <input name='email' onChange={onChangeHandler} value={data.email} className='w-full border border-gray-400 p-3 mb-2 mt-2' type="email" placeholder='Email' required/>
                </div>
              </div>

              <div className="street">
                <label>Street:</label>
                <input name='street' onChange={onChangeHandler} value={data.street} className='w-full border border-gray-400 p-3 mb-2 mt-2' type="text" placeholder='Street' required/>
              </div>

              <div className="pin-city flex">
                <div className="city mr-2 w-full">
                  <label>City:</label>
                  <input name='city' onChange={onChangeHandler} value={data.city} className='w-full border border-gray-400 p-3 mb-2 mt-2' type="text" placeholder='City' required/>
                </div>

                <div className="pincode w-full">
                  <label>Pincode:</label>
                  <input name='pincode' onChange={onChangeHandler} value={data.pincode} className='w-full border border-gray-400 p-3 mb-2 mt-2' type="text" placeholder='Pincode' required/>
                </div>

              </div>
              <div className="mobile">
                <label>Mobile Number:</label>
                <input name='phone' onChange={onChangeHandler} value={data.phone} className='w-full border border-gray-400 p-3 mb-2 mt-2' type="text" placeholder='Mobile Number' required/>
              </div>
            </div>
            <div>
              <div className="mb-10">
                <div className='mt-5'>
                  <div className="total xl:w-md">
                    <div className="subtotal flex justify-between p-2">
                      <h1>Subtotal</h1>
                      <p>₹{getTotalAmount()}</p>
                    </div>
                    <hr />
                    <div className="delivery-fee flex justify-between p-2">
                      <h1>Delivery Fee</h1>
                      {getTotalAmount() === 0 ? "0" : <p>₹{40}</p>}

                    </div>
                    <hr />
                    <div className="net-total flex justify-between p-2 text-xl">
                      <b>Total</b>
                      {getTotalAmount() === 0 ? <b>0</b> : <b>₹{getTotalAmount() + 40}</b>}

                    </div>
                    <hr />
                    <div className="button flex justify-end">

                      <button type='submit' className='bg-red-500 px-10 py-3 mt-5 text-xl text-white font-bold cursor-pointer'>Pay Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>

        </div>
      </div>

    </div>
  )
}

export default PlaceOrder
