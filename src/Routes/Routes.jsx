import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Apps from '../Components/Apps/Apps';
import App from '../App';
import SingleApp from '../Components/App/SingleApp';
import AppDetails from '../Components/AppDetails/AppDetails';
import InstallApp from '../Components/MyInstallation/MyInstallation';
import MyInstallation from '../Components/MyInstallation/MyInstallation';





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
        
        {
          path:"/apps",
          loader:()=>fetch('/appsData.json'),
          Component:SingleApp
        },
        {
        path:"/apps/:id",
        Component:AppDetails,
        loader:async ({params})=>{
          const res= await fetch('/appsData.json');
          const data =await res.json();
          return data.find(app=>app.id === parseInt(params.id));
         
        }

        },
        {
          path:'/installation',
          loader: ()=>fetch('/appsData.json'),
          Component:MyInstallation
        }
     
    ]
        
        
  },
]);