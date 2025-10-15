import React from 'react';
import noFound from "../../assets/asset/App-Error.png"
import { useNavigate } from 'react-router';

const AppsNotFound = () => {
    const navigate = useNavigate();
    return (
         <div className='col-span-full flex flex-col justify-center items-center'>
            <img src={noFound} alt="" />
            <p className='text-4xl font-semibold mt-3'>OOPS!! APP NOT FOUND</p>
            <p className='font-semibold text-gray-500 my-3'>The App you are requesting is not found on our system.  please try another apps</p>
            <button onClick={() => navigate(-1)} className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">Go Back</button>
        </div>
    );
};

export default AppsNotFound;