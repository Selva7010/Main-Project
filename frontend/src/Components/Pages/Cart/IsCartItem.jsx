import React, { useContext } from 'react'
import { Store } from '../../../Context/Store'
import CartEmpty from './cartEmpty'
import Cart from './Cart'
import Navbar from '../../Navbar/Navbar'

const IsCartItem = () => {

    const {getTotalAmount} = useContext(Store)
  return (
    <div>
        <Navbar/>
      {getTotalAmount() === 0 ? <CartEmpty/> : <Cart/>}
    </div>
  )
}

export default IsCartItem
