import React, { useState } from 'react'
import Navbar from '../../Navbar/Navbar'
import ExploreMenu from '../../ExploreMenu/ExploreMenu'
import FoodDisplay from '../../FoodDisplay/FoodDisplay'
import Login from '../../Login/Login'




const OrderNow = () => {
  const [category, setCategory] = useState("All")
  const [showLogin, setShowLogin]=useState()

  return (
    <div>
      {showLogin? <Login setShowLogin={setShowLogin}/> : <></>}
      <Navbar setShowLogin={setShowLogin}/>
     
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
     
    </div>
  )
}

export default OrderNow
