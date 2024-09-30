import React from 'react';
import PageHeading from '../PageHeading/PageHeading';
import { useParams } from 'react-router-dom';
import useDoctors from '../../hooks/useDoctors';
import mapPin from '../../assets/images/doctor_location.png';

const ViewDoctorProfile = () => {
    const { id } = useParams();
    const [ doctors ] = useDoctors();
    const selectedDoctor = doctors.find(doctor => doctor._id === id);
    
    const { _id, image, name, degree, location, service, about, awards, education, workExperience, ratings } = selectedDoctor;
    console.log(selectedDoctor);

    return (
        <section className='doctorProfile'>
            {/* DoctorProfile heading */}
            <PageHeading recentPath="Doctor Profile"></PageHeading>

            {/* profileInfoContainer div starts */}
            <div className="profileInfoContainer container mx-auto px-6 my-16">
                <div className="personalInfo p-5 rounded-md grid gap-5 grid-cols-1 md:grid-cols-3 border">
                    <div className='col-span-1 w-full h-[200px]'>
                        <img src={image} alt="" className='w-full h-full rounded-md bg-gray-200' />
                    </div>

                    <div className='col-span-2 w-full'>
                        <h1 className="text-2xl font-semibold text-slate-900">{name}</h1>
                        <p className='text-gray-500 my-1'>{degree}</p>
                        <p className='text-xs text-gray-500 flex items-center'><img src={mapPin} alt="" className='w-4 h-4 me-1' /> {location}</p>
                        <div className='flex gap-3 items-center mt-2'>
                            {
                                service.map(s => {
                                    return (
                                        <p className='text-xs text-gray-500 p-2 border rounded-md cursor-default hover:shadow-sm transition-all ease-in-out duration-100'>{s}</p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ViewDoctorProfile;