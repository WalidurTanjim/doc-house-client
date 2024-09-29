import React from 'react';
import errImg from '../../assets/images/errorImg.png';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='container mx-auto p-6 flex items-center justify-center w-full h-screen'>
            <div className='text-center'>
                {/* errPageHeading div starts */}
                <div className='errPageHeading'>
                    <h1 className='text-2xl md:text-3xl font-medium text-slate-900'>Sorry,</h1>
                    <p className='text-gray-500'>This page is not found.</p>
                </div>

                {/* errPageImg div starts */}
                <div className='w-full md:w-[550px] h-[300px] my-10'>
                    <img src={errImg} alt="" className='w-full h-full' />
                </div>

                {/* backToHome btn */}
                <Link to="/"><button className='text-center text-xs text-white px-3 sm:px-5 py-2 rounded-md bg-[#F7A582] hover:bg-[#f7824f] active:bg-[#F7A582]'>Back to home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;