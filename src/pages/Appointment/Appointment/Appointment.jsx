import React, { useEffect, useState } from 'react';
import appointmentChair from '../../../assets/images/appointment_chair.png';
import useAuth from '../../../hooks/useAuth';
import './Appointment.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Slots from '../Slots/Slots';
import PageHeading from '../../../components/PageHeading/PageHeading';

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
            <PageHeading recentPath="Appointment"></PageHeading>

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
                <div className='services my-16'>
                    <SectionTitle title="Please select a service"></SectionTitle>

                    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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

                {/* availableSlots */}
                {
                    service !== "All" && <Slots service={service}></Slots>
                }
            </div>
        </section>
    );
};

export default Appointment;