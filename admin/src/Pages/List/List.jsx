import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { assets } from '../../assets/assets'
import Orders from '../Orders/Orders'

const List = () => {

  const url = "https://main-project-server-6dg0.onrender.com"

  const [list, setList] = useState([])
  const fetchData = async () => {
    const response = await axios.get(`${url}/api/food/getAllList`)
    if (response.data.success) {
      setList(response.data.data)
    }
    else {
      toast.error(response.data.message)
    }
  }
  fetchData()


  const removeList = async (itemId) => {
    const response = await axios.post(`${url}/api/food/deleteData`, { id: itemId })

    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error(response.data.message)
    }
  }



  return (
    <div>
      <Navbar />
      <div className=''>
        <Sidebar />
        <div>
          <div className="list">
            <ToastContainer/>
            <div className="flex justify-center">
            <div className='px-10 mt-5 '>
              <p className='mb-10'>All Products ( {list.length} )</p>
              <div className=" ">
                <div class="w-full mt-2 md:w-full xl:w-7xl text-sm text-left text-body">
                  <div className='sm:grid sm:grid-cols-2 xl:grid xl:grid-cols-4 xl:gap-5 md:grid md:grid-cols-3'>
                  {list.map((item, index) => {
                    return (
                      <>
                        <div key={index} className='bg-gray-200 mt-2 md:mr-2'>
                            <div className="px-6 py-4 font-semibold text-heading">
                              <img className='w-full h-50 rounded-2xl' src={`${url}/uploads/` + item.image} alt="" />
                            </div>
                            <div className='flex justify-between items-center'>
                              <div className="px-6 font-bold text-xl">
                              {item.name}
                            </div>

                            <div >
                              <div className="px-2 mr-3 font-bold text-md flex items-center justify-between bg-green-700 p-1 rounded-full">
                              <img className='w-5' src={assets.rating_icon} alt="" />
                              <p className='text-white'>{item.rating}</p>
                            </div>
                            </div>
                            </div>
                            <div className="px-6 mt-2 font-light text-heading text-justify">
                              {item.description}
                            </div>
                            <div className='flex justify-between items-center'>
                            <div className="px-6 mt-2 font-bold text-xl">
                              Price : ₹{item.price}
                            </div>
                            <div className="px-6 mt-2 font-bold text-lg text-md text-red-500">
                              {item.category}
                            </div>
                            </div>
                            
                            <div onClick={() => removeList(item._id)} className="px-6 py-4 font-semibold text-heading text-white cursor-pointer">
                              <p className='p-3 text-center bg-red-500 rounded'>Remove</p>
                            </div>
                        </div>
                      </>
                    )
                  })}
                  </div>

                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default List
