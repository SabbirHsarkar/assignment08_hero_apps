import React from 'react';

const StatesSection = () => {
    return (
        <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-16 px-4 
        
        
        mt-[-80px] text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Trusted By Millions, Built For You
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div>
          <h3 className="text-lg font-medium mb-2">Total Downloads</h3>
          <p className="text-5xl font-bold">29.6M</p>
          <p className="text-sm mt-2 opacity-90">21% More Than Last Month</p>
        </div>

      
        <div>
          <h3 className="text-lg font-medium mb-2">Total Reviews</h3>
          <p className="text-5xl font-bold">906K</p>
          <p className="text-sm mt-2 opacity-90">46% More Than Last Month</p>
        </div>

       
        <div>
          <h3 className="text-lg font-medium mb-2">Active Apps</h3>
          <p className="text-5xl font-bold">132+</p>
          <p className="text-sm mt-2 opacity-90">31 More Will Launch</p>
        </div>
      </div>

        </div>
    );
};

export default StatesSection;