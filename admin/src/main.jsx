import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import StoreProvider from '../src/components/Context/Store'
import AdminRouter from './Routes/Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <StoreProvider>
   <RouterProvider router={AdminRouter}/>
   </StoreProvider>
  </StrictMode>,
)
