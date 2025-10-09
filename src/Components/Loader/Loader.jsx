import React from 'react';
import spinLogo from '../../assets/asset/logo.png'

const Loader = () => {
    return (
        <div>
            <div className="flex items-center justify-center h-64">
                <img className='animate-spin h-25' src={spinLogo} alt="" />
                <p className='ml-2 text-6xl font-bold'>Loading...</p>
            </div>
        </div>
    );
};

export default Loader;