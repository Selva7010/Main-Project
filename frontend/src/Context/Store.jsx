import { createContext, useEffect, useState } from "react";

import axios from 'axios'


export const Store = createContext(null)

const StoreProvider = (props)=>{

    const [cartItems, setCartItems] = useState({})
    const url = "http://localhost:4000"
    const [token, setToken] = useState("")
    const [food_list, setFoodList] = useState([])


    const fetchFoodList = async()=>{
      const response = await axios.get(url+'/api/food/getAllList')
      setFoodList(response.data.data)
    }
    
    

    const addToCart = async(itemId)=>{
      if(!cartItems[itemId]){
        setCartItems((prev)=>({...prev,[itemId]:1}))
      }  
      else{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
      }
      if(token){
        await axios.post(url+'/api/cart/add', {itemId}, {headers:{token}})
      }
    }

    const removeCartItem = async(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(token){
          await axios.post(url+'/api/cart/remove', {itemId}, {headers:{token}})
        }
        
    }

    const LoadCartData = async(token)=>{
      const response = await axios.post(url+'/api/cart/getCart', {}, {headers:{token}})
      setCartItems(response.data.CartData)
    }


    useEffect(()=>{
      async function loadData(){
        await fetchFoodList()
        if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"))
        await LoadCartData(localStorage.getItem("token"))
      }
      }
      loadData()
    },[])

    const getTotalAmount=(e)=>{
      
      let totalAmount=0

      for(const item in cartItems){
        if(cartItems[item]>0){
          let itemInformation=food_list.find((product)=>product._id===item)
          totalAmount +=itemInformation.price * cartItems[item]
        }
      }
      return totalAmount
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeCartItem,
        getTotalAmount,
        url,
        token,
        setToken
      }
    return(
        <Store.Provider value={contextValue}>
            {props.children}
        </Store.Provider>
    )
}
export default StoreProvider