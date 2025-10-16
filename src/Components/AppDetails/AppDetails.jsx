import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

import download from "../../assets/asset/icon-downloads.png"
import rating from "../../assets/asset/icon-ratings.png";
import review from "../../assets/asset/icon-review.png"


const AppDetails = () => {
    const app= useLoaderData();

   
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    const alreadyInstalled = installedApps.find(a => a.id === app.id);
    if (alreadyInstalled) {
      setIsInstalled(true);
    }
  }, [app.id]);

  const handleInstall = () => {
    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    const alreadyInstalled = installedApps.find(a => a.id === app.id);

    if (!alreadyInstalled) {
      installedApps.push(app);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
      setIsInstalled(true);
    }
  };


    if (!app) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold">App Not Found!</h2>
        <Link to="/apps" className="text-blue-500 underline mt-3 block">Back to All Apps</Link>
      </div>
    );
  }

  
    return (
        <div className="w-11/12 mx-auto py-10">
      <Link to={`/apps/${app.id}`} className="flex items-center gap-2 mb-6 text-blue-600 hover:underline">
        ← Back to Apps
      </Link>

      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={app.image}
          alt={app.title}
          className="w-64 h-64 object-contain mx-auto md:mx-0"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{app.title}</h1>
          <p className="text-gray-500 mb-3">
            Developed by <span className="text-blue-500 font-semibold">{app.companyName}</span>
          </p>

          {/* Card Download, Review, ratings */}

          <div className="flex flex-wrap items-center gap-15 mb-5">
            <div className=" font-semibold flex-col">
                <div><img src={download}></img></div>
                 <div>Downloads</div>
                 <div className='text-4xl font-bold'>{app.downloads}<span className='text-4xl'>M</span> </div>
      
                </div>

            <div className=" font-semibold">

                <div><img src={rating} ></img></div>
                <div>Average Rating</div>
                <div className='text-4xl font-bold'>{app.ratingAvg}</div>
                
                  </div>


            <div className=" font-semibold">
                
                <div><img src={review} alt="" /></div>
                <div>Reviews</div>
                <div className='text-4xl font-bold'>{app.reviews}
                    <span className='text-4xl'>K</span>
                    
                     </div>
                
                
                
                </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`btn px-6 text-white ${isInstalled ? "bg-gray-500 cursor-not-allowed" : "btn-success"}`}
          >
            {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
          
        </div>
      </div>

      {/*ReChart Section*/}
      <div className="mt-10 border-t pt-8">
        <h2 className="text-2xl font-semibold mb-4">User Ratings Overview</h2>
<div className="bg-base-200 p-5 rounded-2xl shadow-md">
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      data={app.ratings}
      layout="vertical"
      margin={{ top: 10, right: 30, left: 30, bottom: 10 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" />
      <Tooltip />
      <Bar dataKey="count" fill="#ff9800" barSize={25}  />
    </BarChart>
  </ResponsiveContainer>
</div>
      </div>

      {/*Description*/}
      <div className="mt-10 border-t pt-6">
        <h2 className="text-xl font-semibold mb-3">Description</h2>
        <p className="text-gray-700 leading-relaxed">
          {app.description || "This app helps you manage tasks efficiently and stay organized."}
        </p>
      </div>
    </div>
    );
};

export default AppDetails;