import React from 'react';
import { Link, useLoaderData } from 'react-router';
import SingleApp from '../App/SingleApp';


const Apps = () => {
    const apps=useLoaderData();
    console.log(apps);
    return (
        <div className='mt-4 grid gap-3 md:grid-cols-3'>
         {
            apps.map(app=><SingleApp key={app.id} app={app}></SingleApp>)
         }
            
        </div>
    );
};

export default Apps;