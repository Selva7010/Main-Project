import React, { useContext, useEffect } from 'react'
import Navbar from '../../Navbar/Navbar'
import { Store } from '../../../Context/Store'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'


const Verify = () => {
    const {url} = useContext(Store)
    const navigate = useNavigate()

    const [searchparams, setSearchparams] = useSearchParams()
    const success = searchparams.get("success")
    const orderId = searchparams.get("orderId")

    const verifypayment = async()=>{
        const response = await axios.post(url+'/api/orders/verify', {success, orderId})
        console.log(response);
        
        if(response.data.success){
            navigate(url+'/myOrder')
        }
        else{
            navigate('/')
        }
    }
    useEffect(()=>{
        verifypayment()
    },[])
    
    
  return (
    <div>
      <Navbar/>
      <div>
        Payment Proccessing
      </div>
    </div>
  )
}

export default Verify
