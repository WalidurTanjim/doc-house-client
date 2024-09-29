import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import './PatientReview.css';
import quote from '../../../assets/images/quote.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


const PatientReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('patientsReviews.json');
            const data = await res.json();
            setReviews(data);
        };
        fetchData();
    }, []);

    return (
        <div className='container mx-auto px-6 my-16'>
            <SectionTitle title="What Our Patients Say" subTitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."></SectionTitle>


            <Swiper breakpoints={{
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 2 }
            }} spaceBetween={30} loop={true} pagination={{ clickable: true }} navigation={true} modules={[Pagination, Navigation]} className="mySwiper" >
                {
                    reviews.map(review => {
                        return (
                            <SwiperSlide key={review._id} className="border p-5 sm:p-10 rounded-md">
                                <div className='relative flex items-center mb-3'>
                                    <img src={quote} alt="Quote Icon" className='absolute top-0 right-0 w-10 h-10' />

                                    <img src={review.patientImage} alt="Patient Image" className='w-9 h-9 border border-[#F7A582] rounded-full me-3' />
                                    <div>
                                        <h1 className='text-slate-800 text-md font-semibold'>{review.patientName}</h1>
                                        <p className='text-gray-700 text-xs'>{review.patientEmail}</p>
                                    </div>
                                </div>

                                <p className='text-sm text-gray-500'>{review.review}</p>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
};

export default PatientReview;