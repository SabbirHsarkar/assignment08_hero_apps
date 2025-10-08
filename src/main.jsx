import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from './Routes/Routes.jsx'
import "@fontsource/inter";
import '@fortawesome/fontawesome-free/css/all.min.css';



import { RouterProvider } from "react-router/dom";


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
