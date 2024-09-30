import React from 'react';
import phoneIcon from '../../../assets/images/phone.png';
import mapPinIcon from '../../../assets/images/mapPin.png';

const ContactWithUs = () => {
    return (
        <section className='contactWithUs container mx-auto px-6 my-16'>
            <div className='bg-[#07332F] rounded-lg px-6 py-10 text-white grid gap-5 grid-cols-1 md:grid-cols-2'>
                {/* contentContainer div starts */}
                <div className="contentContainer flex items-center mb-5 md:mb-0">
                    <div className='contentContainerInner'>
                        <h1 className='text-lg md:text-2xl font-medium'>Contact With Us</h1>
                        <p className='my-5 text-sm'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>

                        {/* phoneNumber & location container */}
                        <div className='text-xs'>
                            <p className='flex items-center mb-2'><img src={phoneIcon} alt="" className='w-4 me-2' /> <span>+880 1775 145968</span></p>
                            <p className='flex items-center'><img src={mapPinIcon} alt="" className='w-4 me-2' /> <span>Dhanmondi, Dhaka, Bangladesh</span></p>
                        </div>
                    </div>
                </div>

                {/* inputFieldContainer div starts */}
                <div className='inputFieldContainer'>
                    <form className='w-full'>
                        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 mb-2">
                            {/* fullName div starts */}
                            <div className='fullName'>
                                <input id="fullName" name="fullName" type="text" autoComplete="off" placeholder="Full Name" className="block w-full rounded-md px-2 py-2 border border-[#143D3A] focus:outline-[#4a817d] shadow-sm bg-[#143D3A]" />
                            </div>

                            {/* email div starts */}
                            <div className='email mb-3'>
                                <input id="email" name="email" type="email" autoComplete="off" placeholder="Email Address" className="block w-full rounded-md px-2 py-2 border border-[#143D3A] focus:outline-[#4a817d] shadow-sm bg-[#143D3A]" />
                            </div>
                        </div>

                        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 mb-2">
                            {/* phoneNumber div starts */}
                            <div className='phoneNumber'>
                                <input id="phoneNumber" name="phoneNumber" type="number" autoComplete="off" placeholder="Phone Number" className="block w-full rounded-md px-2 py-2 border border-[#143D3A] focus:outline-[#4a817d] shadow-sm bg-[#143D3A]" />
                            </div>

                            {/* doctorName div starts */}
                            <div className='doctorName mb-3'>
                                <input id="doctorName" name="doctorName" type="text" autoComplete="off" placeholder="Doctor Name" className="block w-full rounded-md px-2 py-2 border border-[#143D3A] focus:outline-[#4a817d] shadow-sm bg-[#143D3A]" />
                            </div>
                        </div>

                        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 mb-2">
                            {/* date div starts */}
                            <div className='date'>
                                <input id="date" name="date" type="date" autoComplete="off" className="block w-full rounded-md px-2 py-2 border border-[#143D3A] focus:outline-[#4a817d] shadow-sm bg-[#143D3A]" />
                            </div>

                            {/* time div starts */}
                            <div className='time mb-3'>
                                <input id="time" name="time" type="time" autoComplete="off" placeholder="Time" className="block w-full rounded-md px-2 py-2 border border-[#143D3A] focus:outline-[#4a817d] shadow-sm bg-[#143D3A]" />
                            </div>
                        </div>

                        <button className='w-full py-2 px-5 rounded-md bg-[#F7A582] hover:bg-[#f7824f] active:bg-[#F7A582] text-sm'>Book Now</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactWithUs;