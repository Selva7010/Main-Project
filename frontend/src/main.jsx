import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import './index.css'

import FoodOrderRouter from './Router/Router.jsx'
import StoreProvider from './Context/Store.jsx'
import Footer from './Components/Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreProvider>
      <RouterProvider router={FoodOrderRouter} />
      <Footer/>
    </StoreProvider>
  </StrictMode>,
  
)
