import React, { useEffect, useState } from 'react';
import halfPill from '../../assets/images/half_pill.png';
import leanPill from '../../assets/images/lean_pill.png';
import appointmentChair from '../../assets/images/appointment_chair.png';
import useAuth from '../../hooks/useAuth';
import './Appointment.css';

const Appointment = () => {
    const { service, setService } = useAuth();
    const [ services, setServices ] = useState([]);
    // console.log(services);

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
                        <h1 className='text-white text-2xl lg:text-3xl font-medium mt-1'>Appointment {service}</h1>
                    </div>
                </div>
            </div>

            {/* appointmentInfo div starts */}
            <div className='container mx-auto px-6 my-16'>
                {/* appointmentDate_Image div starts */}
                <div className="appointmentDate_Image flex flex-col md:flex-row gap-10 items-center justify-between">
                    {/* appointmentDateCalenderDiv div starts */}
                    <div className="appointmentDateCalenderDiv w-full h-[250px] flex items-center justify-center">
                        <h1>Date</h1>
                    </div>
                    
                    {/* appointmentChairImageDiv div starts */}
                    <div className="appointmentChairImageDiv w-full h-[250px]">
                        <img src={appointmentChair} alt="" className='w-full h-full' />
                    </div>
                </div>

                {/* services div starts */}
                <div className="services my-16 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {
                        services.map((s, idx) => {
                            const { name, image } = s;

                            return (
                                <div key={idx} onClick={() => setService(prev => prev === name ? "All" : name)} className={`service ${service === name ? 'active' : ''} bg-gray-50 shadow-md hover:shadow-xl border rounded-md px-3 py-2 flex items-center cursor-pointer transition ease-in-out duration-300`}>
                                    <img src={image} alt="" className='w-[40px] h-[40px]' />
                                    <h1 className='text-lg font-medium ms-2 lg:ms-3'>{name}</h1>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Appointment;