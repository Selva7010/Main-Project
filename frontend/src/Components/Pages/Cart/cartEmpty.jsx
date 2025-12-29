import React from 'react'
import { Link } from 'react-router-dom'


const CartEmpty = () => {
  return (
    <div className='flex justify-center'>
        
      <div className="title w-7xl text-center mt-50 mb-50">
       <h1 className='text-xl font-bold text-red-500'>Your Cart is Empty!</h1>
        <Link to='/order-place'><button className='bg-red-500 text-white font-bold mt-5 px-10 py-3'>Order Now</button></Link>
      </div>
    </div>
  )
}

export default CartEmpty
