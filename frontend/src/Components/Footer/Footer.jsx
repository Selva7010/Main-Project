import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div>
    <div className="flex justify-center bg-black">
        
    <div className='w-7xl xl:grid grid-cols-3 border border-b-gray-400'>
      <div className="logo-description m-5">
        <div className='flex justify-center'>
            <img className='w-70 mb-3' src={assets.logo} alt="" />
        </div>
        <p className='text-white text-justify max-w-100'>Vidyasamayal is a food-ordering platform crafted with love for those who crave authentic homemade flavors. We bring you a variety of delicious, hygienic, and freshly prepared dishes made using traditional recipes passed down through generations. Our goal is to deliver not just food, but comfort, warmth, and the nostalgic taste of home.</p>
      </div>
     <div className='flex justify-center'>
      <div className="company text-white m-5">
        <h1 className='text-4xl font-bold text-red-500 mb-3'>Comapany</h1>
        <ul>
            <li className='cursor-pointer hover:text-orange-400'>Home</li>
            <li className='cursor-pointer hover:text-orange-400'>About Us</li>
            <li className='cursor-pointer hover:text-orange-400'>Delivery</li>
            <li className='cursor-pointer hover:text-orange-400'>Terms and Conditions</li>
        </ul>
      </div>
      </div>
      <div className="flex justify-center">
        <div className="contact text-white m-5">
            <h1 className='text-4xl font-bold text-red-500 mb-3'>Contact</h1>
            <div className='flex items-center gap-3 mb-3'>
              <img className='w-10' src={assets.phone} alt="" /><h1>+91 7010718564</h1>
            </div>
            <div className='flex items-center gap-3 mb-3'>
              <img className='w-10' src={assets.mail} alt="" /><h1>vidyasamayal@order.in</h1>
            </div>
            <div className='flex items-center gap-3 mb-3'>
              <img className='w-10' src={assets.location} alt="" /><h1>Sivakasi</h1>
            </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="social-media flex">
                <img className='w-15 h-15 m-5' src={assets.twitter_icon} alt="" />
                <img className='w-15 h-15 m-5' src={assets.facebook_icon} alt="" />
                <img className='w-15 h-15 m-5' src={assets.linkedin_icon} alt="" />
        </div>
      </div>
    </div>
    </div>
    <div className='bg-black'>
        <p className='text-white text-center p-3'>Copyright &copy; 2025 Vidyasamayal - All Rights Reserved</p>
    </div>
    
    </div>
  )
}

export default Footer
