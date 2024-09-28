import React, { useEffect, useState } from 'react';
import halfPill from '../../assets/images/half_pill.png';
import leanPill from '../../assets/images/lean_pill.png';
import appointmentChair from '../../assets/images/appointment_chair.png';

const Appointment = () => {
    const [ services, setServices ] = useState([]);
    console.log(services);

    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch('services.json');
            const data = await res.json();
            setServices(data);
        };
        fetchData();
    }, []);

    return (
        <section className='appointment'>
            {/* appointmentHeading div starts */}
            <div className="appointmentHeading w-full h-[300px] bg-[#07332F]">
                <div className="container mx-auto px-6 w-full h-full relative flex items-center">
                    <img src={halfPill} alt="" className='absolute transform rotate-180 left-5 bottom-0 w-[100px] lg:w-[180px]' />
                    <img src={leanPill} alt="" className='absolute top-5 right-5 w-[100px] lg:w-[180px]' />

                    <div>
                        <p className='text-white'>Home / Appointment</p>
                        <h1 className='text-white text-2xl lg:text-3xl font-medium mt-1'>Appointment</h1>
                    </div>
                </div>
            </div>

            
        </section>
    );
};

export default Appointment;