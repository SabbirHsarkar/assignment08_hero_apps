import React from 'react';
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import bannerImg from "../../assets/asset/hero.png"

const Banner = () => {
    return (
//         <div className='w-[1440px] mx-auto'>
//      <div>
//     <div className='ml-80 mx-auto'>
//    <h1 className="text-6xl font-bold ">
//   We Build{" "} 
//   <br/>
//   <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
//     Productive
//   </span>{" "}
//   Apps
// </h1>
//         </div>
//      </div>
//     </div>
 <section className="bg-gray-50 w-full py-20">
      <div className="max-w-[1440px] mx-auto px-4 text-center">
        {/* Heading */}
    <h1 className="text-6xl font-bold font-inter leading-tight">
          We Build <br />
     <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
    Productive
      </span>{" "}
     Apps
    </h1>

        
    <p className="mt-6 text-gray-500 text-lg max-w-3xl mx-auto">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

       
       <div className="mt-8 flex justify-center gap-4">
       <a
       href=""
     className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100 transition"
          >
        <FaGooglePlay />
         Google Play
          </a>

          <a
            href=""
            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100 transition"
          >
            <FaAppStoreIos />
            App Store
          </a>
        </div>
      </div>
      <div className='max-w-full mx-auto md:ml-75 mt-10'>
        <img src={ bannerImg } alt="" />
         </div>
        <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-16 px-4 text-white text-center">
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
     
    </section>
    );
};

export default Banner;