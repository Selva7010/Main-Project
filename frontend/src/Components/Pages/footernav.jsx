import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Login from '../Login/Login'




const Footernav = () => {
  const [showLogin, setShowLogin]=useState()

  return (
    <div>
      {showLogin? <Login setShowLogin={setShowLogin}/> : <></>}
      <Navbar setShowLogin={setShowLogin}/>
     <div className='mt-10'>
      <footer/>
    </div>
     
    </div>
  )
}

export default Footernav
