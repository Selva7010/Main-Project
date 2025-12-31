import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { Store } from '../Context/Store'


const Sidebar = () => {
  const {food_list, order} = useContext(Store)
  return (
    <div>
      <div className="sidebar">
        <div className=''>
          <div className="sm:w-10 mt-8 xl:w-sm xl:p-5 xl:flex xl:justify-center xl:ml-45 ">
            <div className='xl:flex gap-5 md:flex md:gap-5 grid grid-cols-1 xl:ml-10 ml-21'>
              <Link to='/add'>
                <div className="add flex items-center cursor-pointer border p-2 w-45 hover:bg-red-500 hover:text-white">
                  <img className='mr-3' src={assets.add_icon} alt="" />
                  <p>Add Item</p>
                </div>
              </Link>
              <Link to='/list'>
                <div className="list flex items-center cursor-pointer border p-2 w-45 hover:bg-red-500 hover:text-white">
                  <img className='mr-3 w-7' src={assets.list_icon} alt="" />
                  <p>List Item ( {food_list.length} )</p>
                </div>
              </Link>
              <Link to='/orders'>
                <div className="orders flex items-center cursor-pointer border p-2 w-45 hover:bg-red-500 hover:text-white">
                  <img className='mr-3' src={assets.order_icon} alt="" />
                  <p>Order ({order.length})</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  )
}

export default Sidebar
