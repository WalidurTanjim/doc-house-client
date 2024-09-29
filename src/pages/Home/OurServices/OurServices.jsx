import React from 'react';
import doctorImage from '../../../assets/images/ourServicesDoctor.png';

const OurServices = () => {
    return (
        <section className='ourServices container mx-auto min-h-[500px] px-6 my-16 grid gap-5 grid-cols-1 md:grid-cols-2'>
            {/* leftImage div starts */}
            <div className='leftImage w-full h-[500px] flex items-center justify-center'>
                <img src={doctorImage} alt="" className='w-full md:w-[300px] h-full' />
            </div>

            {/* rightContent div start */}
            <div className="rightContent w-full h-full">
                {/* rightContentHeading div starts */}
                <div className='rightContentHeading'>
                    <h1 className='text-xl md:text-2xl font-semibold'>Our Services</h1>
                    <p className='text-sm text-gray-500 mt-2'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
            </div>
        </section>
    );
};

export default OurServices;