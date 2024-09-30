import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useDoctors from '../../../hooks/useDoctors';
import doctorLocation from '../../../assets/images/doctor_location.png';
import doctorAvailable from '../../../assets/images/doctor_available.png';
import doctorPrice from '../../../assets/images/doctor_price.png';
import { Link } from 'react-router-dom';

const ExpertDoctors = () => {
    const [ doctors ] = useDoctors();

    return (
        <section className='expertDoctors container mx-auto px-6 my-16 '>
            {/* SectionTitle component starts */}
            <SectionTitle title="Our Expert Doctors" subTitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."></SectionTitle>

            {/* ourDoctors div starts */}
            <div className='doctors grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    doctors.slice(0, 4).map(doctor => {
                        const { _id, image, name, degree, ratings, location, price, available } = doctor;

                        return (
                            <div key={_id} className='doctor group p-3 rounded-md border hover:shadow-lg transition ease-in-out duration-300 cursor-default'>
                                <div className='doctorImageContainer w-full h-[130px] rounded-md bg-gray-200'>
                                    <img src={image} alt="" className='w-full h-full rounded-md' />
                                </div>

                                <div className='doctorContent my-3'>
                                    <h1 className='text-lg font-semibold text-slate-900 group-hover:text-[#F7A582] transition ease-in-out duration-200'>{name}</h1>
                                    <p className='text-sm text-gray-500'>{degree}</p>

                                    <div className='text-xs text-gray-500 font-medium mt-3'>
                                        {/* location */}
                                        <p className='flex items-center'>
                                            <img src={doctorLocation} alt="" className='w-4 h-4 mb-1 me-2' />
                                            <span>{location}</span>
                                        </p>

                                        {/* available data */}
                                        <p className='flex items-center'>
                                            <img src={doctorAvailable} alt="" className='w-4 h-4 mb-1 me-2' />
                                            <span>{available}</span>
                                        </p>

                                        {/* price */}
                                        <p className='flex items-center'>
                                            <img src={doctorPrice} alt="" className='w-4 h-4 me-2' />
                                            <span>{price}</span>
                                        </p>
                                    </div>
                                </div>

                                <Link to={`/doctor/${_id}/profile`}><button className='w-full py-2 rounded-md text-[#F7A582] hover:text-white active:text-[#F7A582] border border-[#F7A582] hover:bg-[#F7A582] active:bg-white text-sm'>View Profile</button></Link>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default ExpertDoctors;