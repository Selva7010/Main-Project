import {createBrowserRouter} from 'react-router-dom'

import HomePage from '../Components/Home/Home'
import Cart from '../Components/Pages/Cart/Cart'
import PlaceOrder from '../Components/Pages/PlaceOrder/PlaceOrder'
import IsCartItem from '../Components/Pages/Cart/IsCartItem'
import OrderNow from '../Components/Pages/Cart/OrderNow'
import Footernav from '../Components/Pages/footernav'
import Verify from '../Components/Pages/verify/Verify'
import MyOrders from '../Components/Pages/MyOrders/MyOrders'
import Login from '../Components/Login/Login'

const FoodOrderRouter = createBrowserRouter([
    
    {
        path:'/',
        element:<HomePage/>
    },
    {
        path:"/cart",
        element:<IsCartItem/>
    },
    {
        path:"/placeorder",
        element:<PlaceOrder/>
    },
    {
        path:"/order-place",
        element:<OrderNow/>
    },
    {
        path:"/footer",
        element:<Footernav/>
    },
    {
        path:"/verify",
        element:<Verify/>
    },
    {
        path:"/myOrder",
        element:<MyOrders/>
    },
    {
        path:"/login",
        element:<Login/>
    }
    
])
export default FoodOrderRouter