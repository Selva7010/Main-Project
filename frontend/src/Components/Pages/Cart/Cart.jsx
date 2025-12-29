import React, { useContext } from 'react'
import Navbar from '../../Navbar/Navbar'
import { Store } from '../../../Context/Store'
import { useNavigate } from 'react-router-dom'
import CartEmpty from './cartEmpty'


const Cart = () => {

  const Navigate = useNavigate()
  const { cartItems, food_list, removeCartItem, getTotalAmount, url } = useContext(Store)

  return (
    <div>
        <div className="flex justify-center">
          <div className="w-7xl mt-10 mb-10 max-w-5xl xl:grid xl:grid-cols-4 md:grid md:grid-cols-3 gap-8">
            {food_list.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <div
                    key={item._id}
                    className=" items-center py-3 bg-gray-200 rounded-2xl w-70 xl:w-60 mt-5 ml-17 md:ml-0 xl:ml-0"
                  >
                    <div className='px-3'>
                      <img
                        src={url + "/uploads/" + item.image}
                        alt={item.name}
                        className="w-full h-40 rounded-2xl "
                      />
                    </div>
                  <div className='px-3'>
                    <p className='text-red-500 font-bold mt-2'>{item.name}</p>
                    <p className=''>Amount : ₹{item.price}</p>
                    <div className='flex justify-end text-red-500 font-bold'>
                     
                      <p className=''>Total: ₹ {item.price * cartItems[item._id]}</p>
                    </div>
                  <div className='flex mt-3'> 
                    <button
                      onClick={() => removeCartItem(item._id)}
                      className="text-white w-full py-2 rounded-l-full font-bold cursor-pointer bg-red-500"
                      type="button"
                    >
                      Remove
                    </button>
                    <div className='w-25 p-2 bg-white border rounded-r-full'>
                    <p className=''>Qty: {cartItems[item._id]}</p>
                    </div>
                    </div>
                    </div>
                  </div>
                )
              }
            })}

          </div>



        </div>
      
      <div className="flex justify-center mb-10">

        <div className="total w-xl p-3">
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

            <button onClick={getTotalAmount() === 0 ? "" : () => Navigate('/placeorder')} className='bg-red-500 px-10 py-3 mt-5 text-xl text-white font-bold cursor-pointer'>Order Now</button>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default Cart
