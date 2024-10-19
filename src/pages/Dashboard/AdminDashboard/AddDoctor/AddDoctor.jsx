import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import DashboardRoutes from '../../../../components/DashboardRoutes/DashboardRoutes';
import useAuth from '../../../../hooks/useAuth';
import axios from 'axios';

const AddDoctor = () => {
    const { selectedOptions, setSelectedOptions } = useAuth();
    const [options, setOptions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");


    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm()
    
    const onSubmit = (data) => {
        data.service = selectedOptions
        console.log(data, {selectedOptions});
    }


    // service dropdown code
    useEffect(() => {
        const fetchAllServices = async() => {
            try{
                const res = await axios.get('allServices.json');
                const data = await res.data;
                setOptions(data);
            }
            catch(err){
                console.error(err);
            }
        };
        fetchAllServices();
    }, []);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (option) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter((item) => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    const isSelected = (option) => selectedOptions.includes(option);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };
    
    const filteredOptions = options.filter((option) =>
        option?.serviceName.toLowerCase().includes(searchTerm)
    );


    return (
        <div className="profileInfoContainer container mx-auto px-6 my-16">
            <DashboardRoutes></DashboardRoutes>

            <h2 className="text-lg font-medium text-gray-800 dark:text-white">Add New Doctor</h2>

            {/* form div starts */}
            <div className='my-10 w-full'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid md:gap-5 grid-cols-1 md:grid-cols-2">
                        {/* name div starts */}
                        <div className='name mb-2'>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Doctor's Name</label>

                            <div className="mt-1">
                                <input id="name" name="name" type="text" autoComplete="off" className="block w-full rounded-md px-2 py-1.5 border border-gray-300 focus:outline-[#4a817d] shadow-sm" {...register("name", { required: true })} />
                            </div>
                        </div>

                        {/* email div starts */}
                        <div className='email mb-2'>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email Address</label>

                            <div className="mt-1">
                                <input id="email" name="email" type="email" autoComplete="off" className="block w-full rounded-md px-2 py-1.5 border border-gray-300 focus:outline-[#4a817d] shadow-sm" {...register("email", { required: true })} />
                            </div>
                        </div>
                    </div>

                    <div className="grid md:gap-5 grid-cols-1 md:grid-cols-2">
                        {/* price div starts */}
                        <div className='price mb-2'>
                            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Service Charge</label>

                            <div className="mt-1">
                                <input id="price" name="price" type="number" autoComplete="off" className="block w-full rounded-md px-2 py-1.5 border border-gray-300 focus:outline-[#4a817d] shadow-sm" {...register("price", { required: true })} />
                            </div>
                        </div>

                        {/* location div starts */}
                        <div className='location mb-2'>
                            <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">Location</label>

                            <div className="mt-1">
                                <input id="location" name="location" type="text" autoComplete="off" className="block w-full rounded-md px-2 py-1.5 border border-gray-300 focus:outline-[#4a817d] shadow-sm" {...register("location", { required: true })} />
                            </div>
                        </div>
                    </div>

                    <div className="grid md:gap-5 grid-cols-1 md:grid-cols-2">
                        {/* degree div starts */}
                        <div className='degree mb-2'>
                            <label htmlFor="degree" className="block text-sm font-medium leading-6 text-gray-900">Degree</label>

                            <div className="mt-1">
                                <input id="degree" name="degree" type="text" autoComplete="off" className="block w-full rounded-md px-2 py-1.5 border border-gray-300 focus:outline-[#4a817d] shadow-sm" {...register("degree", { required: true })} />
                            </div>
                        </div>

                        {/* specialty div starts */}
                        <div className='specialty mb-2'>
                            <label htmlFor="specialty" className="block text-sm font-medium leading-6 text-gray-900">Specialty</label>

                            <div className="mt-1">
                                <div className="relative inline-block w-full">
                                    <button onClick={toggleDropdown} className="w-full bg-white border border-gray-300 rounded-md shadow-sm px-2 py-1.5 focus:outline-[#4a817d] text-left">
                                        {selectedOptions.length === 0 ? 
                                        "Select options" : 
                                        selectedOptions.join(", ")}<span className="float-right">{isOpen ? "▲" : "▼"}</span>
                                    </button>

                                    {isOpen && (
                                        <div className="absolute left-0 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                                            {/* Search Input */}
                                            <div className="p-2">
                                                <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search..." className="w-full border border-gray-300 rounded p-1" />
                                            </div>

                                            {/* Dropdown Options */}
                                            <ul className="max-h-60 overflow-y-auto">
                                                {filteredOptions.map((option, idx) => (
                                                    <li key={idx} className="p-2 hover:bg-gray-200">
                                                        <label className="inline-flex items-center">

                                                            <input type="checkbox" className="form-checkbox h-4 w-4" checked={isSelected(option?.serviceName)} onChange={() => handleSelect(option?.serviceName)}  />
                                                            <span className="ml-2">{option?.serviceName}</span>
                                                        </label>
                                                    </li>
                                                ))}

                                                {/* If no results match */}
                                                {filteredOptions.length === 0 && (
                                                    <li className="p-2 text-gray-500">No options found</li>
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    


                    {/* aboutDoctor div starts */}
                    <div className="about mb-2">
                        <label htmlFor="about" className='block text-sm font-medium leading-6 text-gray-900'>About Doctor</label> 

                        <div className="mt-1">
                            <textarea name="about" id="about" rows="5" autoComplete='off' placeholder='Write here about doctor...' className="block w-full rounded-md px-2 py-1.5 border border-gray-300 focus:outline-[#4a817d] shadow-sm" {...register("about", { required: true })}></textarea>
                        </div>
                    </div>
        

                    <button className='py-2 w-full rounded-md text-center font-medium text-white border border-[#F7A582] bg-[#F7A582] hover:bg-[#f7824f] active:bg-[#F7A582] shadow-sm text-sm mt-2'>Add Doctor</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;