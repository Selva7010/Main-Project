import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Store } from '../../Context/Store'

const FoodList = ({id, name, rating, description, price, image}) => {


    const {cartItems, removeCartItem, addToCart, url} = useContext(Store)

  return (
    
        <div className='flex '>
      <div className="food-item hover:border border-gray-400 rounded-t-4xl shadow-md hover:shadow-xl">
        <div className="image ">
            <figure className='relative p-2'>
                <img className='rounded-t-4xl w-80 h-55' src={url+"/uploads/"+image} alt="" />
                <figcaption className='absolute top-20 left-3 xl:top-33 xl:left-5 translate-y-1/2'>
                    {!cartItems[id] ? <div className='left-60 text-center cursor-pointer xl:w-10 xl:h-10 w-8 mb-5' onClick={()=>addToCart(id)} ><p className='bg-white hover:bg-green-700 hover:border hover:border-white p-1.5 text-xl font-semibold rounded-full hover:text-white'>+</p></div> :
                    <div className='flex items-center bg-white xl:p-2 p-0 rounded-3xl'>
                        <img className='mr-3 cursor-pointer xl:w-10 w-8 hover:border-2 border-red-500 rounded-full' onClick={()=>removeCartItem(id)} src={assets.remove_icon_red} alt="" />
                        <p className='text-lg font-semibold'>{cartItems[id]}</p>
                        <img className='ml-3 cursor-pointer xl:w-10 w-8 hover:border-2 border-green-500 rounded-full' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>}
                </figcaption>
            </figure>
        </div>
        <div className="name-rating flex justify-between mt-3 items-center p-2">
            <p className='text-xl font-bold'>{name}</p>
            <div className='px-2 bg-green-700 rounded-full flex items-center justify-evenly'>
              <img className='w-5' src={assets.rating_starts} alt="" /> 
              <span className='text-white'>{rating}</span>
              </div>
        </div>
        <div className="description p-2">
            <p className='text-justify font-light'>{description}</p>
        </div>
        <p className="price mb-1 text-xl font-bold text-red-500 p-2">₹.{price}</p>
      </div>
    </div>
  )
}

export default FoodList
