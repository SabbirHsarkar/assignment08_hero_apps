import React from 'react';
import spinLogo from "../../assets/asset/logo.png"

const Searching = () => {
    return (
        <div>
             <div className='flex items-center justify-center mx-auto col-span-full'>
            <img className='animate-spin w-[35px]' src={spinLogo} alt="" />
            <p className='text-lg font-semibold text-blue-600 col-span-full ml-3'>Searching...</p>
        </div>
        </div>
    );
};

export default Searching;