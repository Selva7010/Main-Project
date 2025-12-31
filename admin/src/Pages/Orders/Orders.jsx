import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { assets } from '../../assets/assets'

const Orders = () => {

  const url = "https://main-project-server-6dg0.onrender.com"

  const [order, setOrder] = useState([])

  const fetchAllData = async () => {
    const response = await axios.get(url + '/api/orders/listOrders')
    if (response.data.success) {
      setOrder(response.data.data)
      console.log(response.data.data);

    }
  }


  const statusUpdateHandler = async (event, orderId) => {
    const response = await axios.post(url + '/api/orders/status', {
      orderId,
      status: event.target.value
    })
    if (response.data.success) {
      await fetchAllData()
    }
  }

  useEffect(() => {
    fetchAllData()
  }, [])

  return (
    <div>
      <Navbar />
      <div className=''>
        <Sidebar />
        <div className="flex justify-center">
          <div className="w-4xl">
            <p className='text-xl font-semibold mb-3 mt-5 p-2'>Order Page ( {order.length} )</p>
            <div className="p-2">

              <div className=''>
                {order.map((order, index) => {
                  return (
                    <div>
                      <div className="bg-gray-300 flex justify-between p-2 font-bold">
                        <div className='flex'>
                          <h1 className='w-15'></h1>
                          <h1 className='ml-10'>Name</h1>
                        </div>
                        <div className="mr-10">
                          <h1>Qty</h1>
                        </div>
                      </div>
                      <div className='bg-gray-200 mb-2 p-3' key={index}>
                        <div className='flex items-center mb-3'>
                          <img className='w-20' src={assets.delivery_icon} alt="" />
                          <div className='w-full'>
                            {order.items.map((item, index) => {
                              return (
                                <div className='flex justify-between' key={index}>
                                  <div className='ml-5'>
                                    <li><p className='ml-2'>{item.name}</p></li>
                                  </div>
                                  <div className=''>
                                    <p className='mr-8 text-center w-10'>{item.quantity}</p>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center">
                          <div>
                            <p className='font-bold mt-2'><u>Delivery Address</u></p>
                            <p className='font-bold text-red-500'>{order.address.name}</p>
                            <p>{order.address.city + ', ' + order.address.street}</p>
                            <p>{order.address.pincode + ','}</p>
                            <p>{order.address.phone}</p>
                          </div>
                          <div className='text-end'>
                            <p className='mr-10 flex justify-between mb-1 font-bold'><span className='mr-5'>Total Amount :  </span><span className='w-13'>₹ {order.amount}</span></p>
                            <p className='mr-10 flex justify-between'> <span>Total Items :</span> <span>{order.items.length}</span></p>
                            <select className='mr-10 mt-2 p-2 bg-red-500 text-white outline-none' onChange={(event) => statusUpdateHandler(event, order._id)} value={order.status}>{order.status}
                              <option value="Proccessing">Proccessing</option>
                              <option value="Out for Delivery">Out for Delivery</option>
                              <option value="Delivered">Delivered</option>
                            </select>
                          </div>
                        </div>

                      </div>
                    </div>

                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders
