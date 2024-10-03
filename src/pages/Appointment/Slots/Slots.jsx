import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';


// ModalComponent starts
const ModalComponent = () => {
    const { open, setOpen, selectedSlot } = useAuth();
    const { serviceName, time } = selectedSlot;
    // console.log("Selected slot from ModalComponent: ", selectedSlot);

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop transition className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in" />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel transition className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">{serviceName}</DialogTitle>

                                    <div className='my-5'>
                                        {/* date div starts */}
                                        <div className='date mb-3'>
                                            <input id="date" name="date" type="text" autoComplete="off" disabled={true} className="block w-full rounded-md px-2 py-1.5 bg-[#E6E6E6] border border-gray-300 focus:outline-[#4a817d] shadow-sm text-sm font-medium" />
                                        </div>

                                        {/* time div starts */}
                                        <div className='time mb-3'>
                                            <input id="time" name="time" type="text" autoComplete="off" defaultValue={time} disabled={true} className="block w-full rounded-md px-2 py-1.5 bg-[#E6E6E6] border border-gray-300 focus:outline-[#4a817d] shadow-sm text-sm font-medium" />
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <form className="w-full">
                                            {/* fullName div starts */}
                                            <div className='fullName mb-3'>
                                                <input id="fullName" name="fullName" type="text" autoComplete="off" placeholder="Full Name" className="block w-full rounded-md px-2 py-1.5 border border-gray-300 focus:outline-[#4a817d] shadow-sm text-sm" />
                                            </div>

                                            {/* email div starts */}
                                            <div className='email mb-3'>
                                                <input id="email" name="email" type="email" autoComplete="off" placeholder="Email Address" className="block w-full rounded-md px-2 py-1.5 border border-gray-300 focus:outline-[#4a817d] shadow-sm text-sm" />
                                            </div>

                                            {/* phoneNumber div starts */}
                                            <div className='phoneNumber'>
                                                <input id="phoneNumber" name="phoneNumber" type="number" autoComplete="off" placeholder="Phone Number" className="block w-full rounded-md px-2 py-1.5 border border-gray-300 focus:outline-[#4a817d] shadow-sm text-sm" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* submit and cancel buttonContainer div start */}
                        <div className="buttonContainer px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button type="button" className="inline-flex w-full justify-center rounded-md bg-[#07332F] hover:bg-[#226863] active:bg-[#07332F] px-3 py-2 text-sm font-semibold text-[#ffffff] shadow-sm ring-1 ring-inset ring-gray-300 sm:w-auto">Submit</button>

                            <button type="button" onClick={() => setOpen(false)} className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:mr-3 mt-3 sm:mt-0 sm:w-auto">Cancel</button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
};
// ModalComponent ends


const Slots = ({ service }) => {
    // console.log("Service as a props from appointment page in slots component: ", service);
    const [ slots, setSlots ] = useState([]);
    const selectedService = slots.find(slot => slot.name === service);
    const { user, open, setOpen, setSelectedSlot } = useAuth();
    const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch('services.json');
            const data = await res.json();
            setSlots(data);
        };
        fetchData();
    }, []);


    // bookAppointment handler
    const bookAppointment = (id, slot) => {
        if(user){
            setOpen(true);
            setSelectedSlot(slot);
            return;
        }else{
            navigate('/signIn')
        }
    }

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

                                <button onClick={() => bookAppointment(idx, slot)} className='text-center text-xs text-white px-3 sm:px-5 py-2 rounded-md bg-[#F7A582] hover:bg-[#f7824f] active:bg-[#F7A582]'>Book Appointment</button>
                            </div>
                        )
                    })
                }
            </div>
            { open && <ModalComponent></ModalComponent> }
        </div>
    );
};

export default Slots;