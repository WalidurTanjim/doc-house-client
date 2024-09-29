import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import useAuth from '../../../hooks/useAuth';


// modal component starts
const ModalComponent = () => {
    const { open, setOpen } = useAuth();

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <DialogPanel
                    transition
                    className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                >
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-600" />
                        </div>
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                            Deactivate account
                        </DialogTitle>
                        <div className="mt-2">
                            <p className="text-sm text-gray-500">
                            Are you sure you want to deactivate your account? All of your data will be permanently removed.
                            This action cannot be undone.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    >
                        Deactivate
                    </button>
                    <button
                        type="button"
                        data-autofocus
                        onClick={() => setOpen(false)}
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                        Cancel
                    </button>
                    </div>
                </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
};
// modal component ends


const Slots = ({ service }) => {
    const [ slots, setSlots ] = useState([]);
    const selectedService = slots.find(slot => slot.name === service);
    const { open, setOpen } = useAuth();
    const [showComponent, setShowComponent] = useState(false);
    console.log("Slot component showComponent state value:", showComponent);


    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch('services.json');
            const data = await res.json();
            setSlots(data);
        };
        fetchData();
    }, []);


    // bookAppointment handler
    const bookAppointment = id => {
        setOpen(true);
        console.log(id);
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

                                <button onClick={() => bookAppointment(idx)} className='text-center text-xs text-white px-3 sm:px-5 py-2 rounded-md bg-[#F7A582] hover:bg-[#f7824f] active:bg-[#F7A582]'>Book Appointment</button>
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