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
        
     
    </section>
    );
};

export default Banner;