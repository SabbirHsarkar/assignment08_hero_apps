import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Apps from '../Components/Apps/Apps';





export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            loader:()=>fetch('/appsData.json'),
        
        path:"/",
        Component: Home
        },
        {
          path:'/apps',
          loader: ()=>fetch('/appsData.json'),
          Component:Apps



        },  
     
    ]
        
        
  },
]);