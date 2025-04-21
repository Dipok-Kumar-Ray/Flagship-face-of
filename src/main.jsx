import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  RouterProvider } from 'react-router'
import router from './Routes/Routes.jsx'
import CartProvider from './providers/CartProvider.jsx'
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
   <CartProvider>
   <RouterProvider router={router} />
   <Toaster position='bottom-right'/>
   </CartProvider>
  </StrictMode>,
)
