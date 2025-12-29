import React, { useState } from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import ExploreMenu from '../ExploreMenu/ExploreMenu'
import FoodDisplay from '../FoodDisplay/FoodDisplay'
import Login from '../Login/Login'




const HomePage = () => {
  const [category, setCategory] = useState("All")
  const [showLogin, setShowLogin]=useState()
  

  return (
    <div>
      {showLogin? <Login setShowLogin={setShowLogin}/> : <></>}
      <Navbar setShowLogin={setShowLogin}/>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
     
    </div>
  )
}

export default HomePage
