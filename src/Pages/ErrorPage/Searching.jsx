import React from 'react';
import spinLogo from "../../assets/asset/logo.png"

const Searching = () => {
    return (
        <div>
             <div className='flex items-center justify-center mx-auto col-span-full'>
            <img className='animate-spin w-[40px]' src={spinLogo} alt="" />
            <p className='text-lg font-semibold text-blue-500 col-span-full ml-2'>Searching...</p>
        </div>
        </div>
    );
};

export default Searching;