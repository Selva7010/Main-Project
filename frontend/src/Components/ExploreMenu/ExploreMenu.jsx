import React from 'react'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-Menu mt-10 flex justify-center' id='explore-Menu'>
        <div className='w-7xl'>
      <h1 className='text-center text-3xl font-bold'>Our Menu's</h1>
      <div className="menu-list grid grid-cols-2 overflow-x-scroll justify-between mt-5 xl:flex"> 
        {menu_list.map((item)=>(
            <div onClick={()=>setCategory(prev=>prev===item.menu_name ? "All" : item.menu_name)} key={item.index} className='explore-menu-items flex flex-col m-2 justify-center'>
            <img className={` cursor-pointer rounded-full w-30 h-30 ${category===item.menu_name ? "border-4 border-red-500 rounded-full p-1" : ""}`} src={item.menu_image} alt="" />
                <p className='text-center font-semibold mt-2 text-lg  text-gray-500 cursor-pointer'>{item.menu_name}</p>

            </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default ExploreMenu
