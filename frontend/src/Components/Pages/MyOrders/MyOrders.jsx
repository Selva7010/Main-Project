import React from 'react'
import Navbar from '../../Navbar/Navbar'
import { useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { Store } from '../../../Context/Store'
import { useEffect } from 'react'
import { assets } from '../../../assets/assets'

const MyOrders = () => {

  const { url, token } = useContext(Store)

  const [data, setData] = useState([])

  const fetchAllData = async () => {
    const response = await axios.post(url + '/api/orders/myOrders', {}, { headers: { token } })

    if (response.data.success) {
      setData(response.data.data)
    }
  }

  useEffect(() => {
    if (token) {
      fetchAllData()
    }
  }, [token])

  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="w-2xl mt-10 ml-3 flex items-center">
          <img src={assets.parcel_icon} alt="" />
          <h1 className='text-2xl font-semibold'>My Orders ( {data.length} )</h1>
          </div>
      </div>
      <div className='flex justify-center mt-3 mb-10'>
        <div className='w-2xl grid grid-cols-1 p-2'>
          <div className="bg-gray-300 mb-2 flex justify-between p-2">
            <div className='flex'>
              <h1>Image</h1>
              <h1 className='ml-10'>Name</h1>
            </div>
            <div className="flex">
              <h1>Qty</h1>
              <h1 className='xl:ml-20 ml-10'>Price</h1>
            </div>
            <h1>Total</h1>
          </div>
          {data.map((orders, index) => {
            return (
              <div key={index} className='container'>
                <div className='bg-gray-200 mb-2 p-1 w-full'>
                  {orders.items.map((item, index) => {
                    return (
                      <div key={index} className='flex items-center'>

                        <div className='flex items-center'>
                          <img className='w-10 h-7 mt-2 ml-3' src={url + '/uploads/' + item.image} alt={item.name} />
                          <h1 className='xl:ml-10 ml-5 mt-2 xl:w-30 w-30'>{item.name}</h1>
                        </div>
                        <h1 className='mt-2 xl:ml-27 ml-5 w-5 text-center'>{item.quantity}</h1>
                        <h1 className='mt-2 xl:ml-18 ml-13 w-10 text-center'>{item.price}</h1>
                        <h1 className='mt-2 xl:ml-40 ml-9 mr-3  w-10 text-center'>{item.quantity * item.price}</h1>

                      </div>
                      
                    )
                  })}
                  <hr className='mt-2 mb-2' />
                  <div className='flex justify-between items-center'>
                    <div className='ml-2 xl:flex'>
                      <h1>Order Status : </h1>
                      <div className='xl:flex flex flex-row'>
                        <span className='text-green-600 mr-2 xl:ml-3 ml-0'>&#x25cf;</span>
                        <span className='font-bold text-green-600'>{orders.status}</span>
                      </div>
                    </div>
                  <div>
                    
                    <div className='flex items-center justify-end mr-3 mb-2'>
                    <p className='mr-5'>Delivery Fee : </p>
                    <p className='text-center xl:w-10'>40</p>
                  </div>
                  <div className='flex items-center justify-end mr-3 mb-2'>
                    <b className='mr-5'>Total Amount : </b>
                    <b className='text-center xl:w-10'>{orders.amount}</b>
                  </div>
                  <div className="flex justify-end mr-3 mb-3">
                    <button onClick={fetchAllData} className='bg-red-500 text-white py-2 px-5 cursor-pointer'>Track Order</button>
                  </div>
                  </div>
                  </div>
                  
                  
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MyOrders
