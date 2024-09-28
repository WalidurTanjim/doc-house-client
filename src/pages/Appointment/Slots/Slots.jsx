import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Slots = ({ service }) => {
    const [ slots, setSlots ] = useState([]);
    const selectedService = slots.find(slot => slot.name === service);
    // console.log(service, slots, selectedService)

    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch('services.json');
            const data = await res.json();
            setSlots(data);
        };
        fetchData();
    }, []);

    return (
        <div className='slots my-16'>
            <SectionTitle title={`Available slots for ${service}`}></SectionTitle>

            <div className='grid gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {
                    selectedService?.services.map((slot, idx) => {
                        const { serviceName, time, image } = slot;

                        return (
                            <div key={idx} className='slot border rounded-md px-3 py-5 text-center'>
                                <img src={image} alt="" className='w-[60px] h-[60px] border border-[#F7A582] rounded-full p-3 bg-[#fdf8f6] mx-auto' />

                                <div className='text-center my-5'>
                                    <h1 className='font-medium'>{serviceName}</h1>
                                    <p className='text-xs font-medium mt-1'>{time}</p>
                                </div>

                                <button className='text-center text-xs text-white px-3 sm:px-5 py-2 rounded-md bg-[#F7A582] hover:bg-[#f7824f] active:bg-[#F7A582]'>Book Appointment</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Slots;