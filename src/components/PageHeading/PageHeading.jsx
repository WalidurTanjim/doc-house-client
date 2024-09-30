import React from 'react';
import halfPill from '../../assets/images/half_pill.png';
import leanPill from '../../assets/images/lean_pill.png';

const PageHeading = ({ recentPath }) => {
    return (
        <div className="appointmentHeading w-full h-[300px] bg-[#07332F]">
            <div className="container mx-auto px-6 w-full h-full relative flex items-center">
                <img src={halfPill} alt="" className='absolute transform rotate-180 left-5 bottom-0 w-[100px] lg:w-[180px]' />
                <img src={leanPill} alt="" className='absolute top-5 right-5 w-[100px] lg:w-[180px]' />

                <div>
                    <p className='text-white'>Home / {recentPath}</p>
                    <h1 className='text-white text-2xl lg:text-3xl font-medium mt-1'>{recentPath}</h1>
                </div>
            </div>
        </div>
    );
};

export default PageHeading;