import React from 'react';
import banner from '../../../assets/images/banner_02.png';
import topVector from '../../../assets/images/Vector-2.png';
import verticalPill from '../../../assets/images/vertical_pill.png';
import leanPill from '../../../assets/images/lean_pill.png';

const Banner = () => {
    return (
        <section className='banner relative bg-[#07332F] w-full min-h-[550px] flex items-center'>
            <img src={topVector} alt="" className='absolute top-0 left-0 h-[180px]' />
            <div className='container mx-auto px-5 xl:px-0 text-white py-14 grid gap-5 grid-cols-1 md:grid-cols-2 h-full content-center'>
                {/* bannerContent div */}
                <div className='relative flex items-center'>
                    <img src={verticalPill} alt="" className='absolute right-0 bottom-9' />

                    <div>
                        <h1 className='text-2xl md:text-4xl font-medium'>Your Best Medical <br />Help Center</h1>
                        <p className='my-5'>Medical treatment is essential for diagnosing, managing, and curing illnesses, ensuring overall health and well-being. It helps prevent complications and improves the quality of life.</p>
                        <button className='py-2 px-5 rounded-md bg-[#F7A582] hover:bg-[#f7824f] active:bg-[#F7A582] text-sm'>All Services</button>
                    </div>
                </div>

                {/* bannerImage div */}
                <div className='relative flex justify-center items-center'>
                    <img src={leanPill} alt="" className='absolute top-0 left-0 h-[150px] hidden md:block' />
                    <img src={banner} alt="Banner Image" className='h-[300px] lg:h-[450px]' />
                </div>
           </div> 
        </section>
    );
};

export default Banner;