import React from 'react';
import { ClockIcon, MapPinIcon, PhoneArrowUpRightIcon } from '@heroicons/react/24/outline'

const InfoCard = () => {
    return (
        <section className='infoCards container mx-auto px-5 mx:px-0 my-16 grid gap-6 lg:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
            <div className='infoCard rounded-md p-5 bg-[#07332F] text-white flex sm:col-span-1 md:col-span-1'>
                <span><ClockIcon className='text-white w-7 h-7'></ClockIcon></span>

                <div className='ms-3'>
                    <h1 className='text-lg font-medium mb-1'>Opening Hours</h1>
                    <p className='text-xs'>9:00 am to 5:00 pm <br />Everyday</p>
                </div>
            </div>

            <div className='infoCard rounded-md p-5 bg-[#F7A582] text-white flex sm:col-span-1 md:col-span-1'>
                <span><MapPinIcon className='text-white w-7 h-7'></MapPinIcon></span>

                <div className='ms-3'>
                    <h1 className='text-lg font-medium mb-1'>Our Location</h1>
                    <p className='text-xs'>Dhanmondi 17, 1200 <br />Dhaka, Bangladesh</p>
                </div>
            </div>

            <div className='sm:col-span-2 md:col-span-1'>
                <div className='infoCard rounded-md p-5 bg-[#07332F] text-white flex sm:w-2/4 md:w-full mx-auto'>
                    <span><PhoneArrowUpRightIcon className='text-white w-7 h-7'></PhoneArrowUpRightIcon></span>

                    <div className='ms-3'>
                        <h1 className='text-lg font-medium mb-1'>Contact Us</h1>
                        <p className='text-xs'>+880 1744 693175 <br />+880 1775 448319</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoCard;