import React from 'react';
import { Link } from 'react-router';
import download from "../../assets/asset/icon-downloads.png"
import ratings from "../../assets/asset/icon-ratings.png"

const TrendApps = ({singleApp}) => {
    
    return (
     <Link to={``}>
            <div className="card bg-base-200 shadow-sm">
       <figure>
          <img className='h-[150px] w-[150px] m-3 '
               src={singleApp.image}
                alt="Apps" />
                </figure>
     <div className="card-body">
         <h2 className="card-title">
             {singleApp.title}
        </h2>
          <div className="flex justify-between">

        <div className="badge badge-soft badge-success rounded">
               <img className='w-[20px]' src={download} alt="" />
               <p className='font-bold'>{singleApp.downloads}</p>
            </div>

       <div className="badge badge-soft badge-warning rounded">
         <img className='w-[20px]' src={ratings} alt="" />
            <p className='font-bold'>{singleApp.ratingAvg}</p>
             </div>
          </div>
      </div>
            </div>
        </Link>
        
    );
};

export default TrendApps;