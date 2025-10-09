import React from 'react';
import TrendApps from './TrendApps';
import { Link } from 'react-router';

const TopShowApp = ({popularApp}) => {
    return (
         <div className='p-4 md:p-10 text-center'>
            <h1 className='mb-4 font-bold text-3xl'>Trending Apps</h1>
            <p className='mt-8 text-[#627382] '>Explore All Trending Apps on the Market developed by us</p>

            <div className='mt-4 grid gap-3 md:grid-cols-3 lg:grid-cols-4'>
                {
                    popularApp.map((singleApp)=>
                        <TrendApps   key={singleApp.id}
                        singleApp={singleApp}></TrendApps>
                    )
                }

            </div>
  <Link to="/apps" className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-5 mt-5">Show All</Link>

            </div>
       
    );
};

export default TopShowApp;