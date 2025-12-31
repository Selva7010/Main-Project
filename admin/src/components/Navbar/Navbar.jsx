import React, { useContext } from 'react'
import {assets} from '../../assets/assets'
import { Store } from '../Context/Store'

const Navbar = () => {

  const {data} = useContext(Store)
  console.log(data);
  

  return (
    <div className='flex justify-center'>
      <div className="navbar w-full">
        <div className="logo flex justify-between p-5 ">
            
            <img className='w-40 h-10' src={assets.logo} alt="" />
            <img className='w-10 rounded-full h-10' src={assets.profile_image} alt="" />
        </div>
        <hr className='border-b-2 border-gray-300' />
      </div>
    </div>
  )
}

export default Navbar
