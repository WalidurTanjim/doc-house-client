import React, { useEffect, useState } from 'react';
import appointmentChair from '../../../assets/images/appointment_chair.png';
import useAuth from '../../../hooks/useAuth';
import './Appointment.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Slots from '../Slots/Slots';
import PageHeading from '../../../components/PageHeading/PageHeading';

// react-datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Appointment = () => {
    const { service, setService, setAppointmentDate } = useAuth();
    // console.log('Service from useAuth hook in appointment page: ', service);
    const [ services, setServices ] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    // console.log("Services from appointment page:", services);

    // Extract details from the selected date (react-datepicker)
    const formatDate = (date) => {
        if (!date) return "";
        const options = { weekday: "long", month: "long", day: "numeric", year: "numeric" };
        return date.toLocaleDateString("en-US", options);
    };
    setAppointmentDate(formatDate(startDate));

    // console.log("DatePicker formate date:", formatDate(startDate));

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
                    <div className="appointmentDateCalenderDiv w-full h-[250px]">
                        <h1 className='mb-3 font-medium text-slate-900 text-lg'>Select your appointment date:</h1>

                        <div className="w-full">
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="border rounded-md px-2 py-1 outline-none border-gray-300 focus:border-slate-500" />
                        </div>
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