import React, { useEffect, useState } from 'react';
import { useFieldArray, useForm } from "react-hook-form"
import DashboardRoutes from '../../../../components/DashboardRoutes/DashboardRoutes';
import useAuth from '../../../../hooks/useAuth';
import axios from 'axios';
import { PlusCircleIcon, TrashIcon } from '@heroicons/react/24/outline'
import { addEducationFields, addWorkExperienceFields, addAwardFields } from './script.js';
import useAxiosSecure from '../../../../hooks/useAxiosSecure.jsx';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { selectedOptions, setSelectedOptions } = useAuth();
    const [options, setOptions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const [file, setFile] = useState('');   // image file
    const [image, setImage] = useState(''); // image
    // console.log("File:", file);
    // console.log("Image:", image);

    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    // upload image functions starts
    // previewFile
    const previewFile = file => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setImage(reader.result);
        }
    }

    // handleChange
    const handleChange = e => {
        const photoFile = e.target.files[0];
        setFile(photoFile);
        previewFile(photoFile);
    }
    // upload image functions ends


    // awards, education, workExperience with useFieldArray of react-hook-form starts
    const { register, handleSubmit, control, reset, watch, formState: { errors } } = useForm({
        defaultValues: {
            education: [{ university: '', degrees: '', session: '' }],
            workExperience: [{ experience: '', session: '' }],
            awards: [{ awardName: '', year: '', aboutAward: '' }]
        }
    });

    const { fields: educationFields, append: appendEducation, remove: removeEducation } = useFieldArray({
        control,
        name: 'education'
    });

    const { fields: workExperienceFields, append: appendWorkExperience, remove: removeWorkExperience } = useFieldArray({
        control,
        name: 'workExperience'
    });

    const { fields: awardFields, append: appendAward, remove: removeAward } = useFieldArray({
        control,
        name: "awards"
    });
    // award, educations, workExperience with useFieldArray of react-hook-form ends
    
    const onSubmit = async(data) => {
        // upload image to cloudinary and get image live link to save it db
        try{
            const result = await axiosSecure.post('/', {
                image: image
            })

            console.log("Result from cloudinary:", result.data);
            
            if(result?.data){
                const image_live_link = result?.data?.secure_url; // image live link from cloudinary
                console.log("Live link:", image_live_link)
                data.image = image_live_link; // live link inject to the data
                data.service = selectedOptions; // services the doctor provided


                // upload the doctor info to the db
                const postData = async() => {
                    try{
                        const res = await axiosSecure.post('/doctors', data);
                        const dta = await res.data;

                        if(dta?.insertedId){
                            if(dta?.insertedId){
                                Swal.fire({
                                    title: "Congratulations",
                                    text: "Doctor Added Successfully",
                                    icon: "success"
                                });

                                navigate('/manageDoctors');
                            }
                        }
                    }catch(err){
                        console.error(err);
                    }
                }
                postData();
            }
        }catch(err){
            console.error(err);
        }

        console.log("Data:", data);
    };


    // service dropdown code starts
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
    // service dropdown code ends





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
                    
                    {/* education starts */}
                    <div className='education mb-2'>
                        <div className='flex items-center justify-between'>
                            <label htmlFor="education" className="block text-sm font-medium leading-6 text-gray-900">Education</label>

                            <span id="plusCircleIcon" onClick={() => appendEducation({ university: '', degrees: '', session: '' })}><PlusCircleIcon className='w-5 h-5 text-gray-500 hover:text-gray-700 active:text-gray-500'></PlusCircleIcon></span>
                        </div>

                        {/* Dynamic Education Fields */}
                        {
                            educationFields.map((item, index) => (
                                <div key={item.id} id="educationParent">
                                    <div id="educationContainer" className="education mt-1">
                                        <input id="university" name="university" type="text" autoComplete="off" className="block w-full rounded-md px-2 py-1.5 border border-gray-300 focus:outline-[#4a817d] shadow-sm" {...register(`education.${index}.university`, { required: true })} placeholder='University Name' />

                                        <div className='degree_sessionContainer grid md:gap-5 grid-cols-1 md:grid-cols-2 mt-2'>
                                            <input id="degree" name="degree" type="text" autoComplete="off" className="block w-full rounded-md px-2 py-1.5 border border-gray-300 focus:outline-[#4a817d] shadow-sm mb-2 md:mb-0" {...register(`education.${index}.degrees`, { required: true })} placeholder='Degree' />
                                            <input id="session" name="session" type="text" autoComplete="off" className="block w-full rounded-md px-2 py-1.5 border border-gray-300 focus:outline-[#4a817d] shadow-sm" {...register(`education.${index}.session`, { required: true })} placeholder='Session (2000 - 2001 format)' />
                                        </div>

                                        <button type="button" onClick={() => removeEducation(index)} lassName="text-gray-500 hover:text-red-500 mt-2"><TrashIcon className="w-5 h-5" /></button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    {/* workExperience starts */}
                    <div className="workExperience mb-2">
                        <div className="flex items-center justify-between">
                            <label htmlFor="workExperience" className="block text-sm font-medium text-gray-900">Work Experience</label>

                            <button type="button" onClick={() => appendWorkExperience({ experience: '', session: '' })} className="text-gray-500 hover:text-gray-700 active:text-gray-500">
                                <PlusCircleIcon className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Dynamic Work Experience Fields */}
                        {workExperienceFields.map((item, index) => (
                            <div key={item.id} className="grid md:gap-5 grid-cols-1 md:grid-cols-2 mt-4 mb-4">
                                <div className="relative">
                                    <input {...register(`workExperience.${index}.experience`, { required: true })} className="block w-full rounded-md px-2 py-1.5 border border-gray-300 focus:outline-[#4a817d] shadow-sm" placeholder="Experience" />
                                </div>
                                <div className="relative">
                                    <input {...register(`workExperience.${index}.session`, { required: true })}
                                        className="block w-full rounded-md px-2 py-1.5 border border-gray-300 focus:outline-[#4a817d] shadow-sm" placeholder="Session (2000 - 2001)" />
                                </div>

                                <button type="button" onClick={() => removeWorkExperience(index)} className="text-gray-500 hover:text-red-500 ml-2"><TrashIcon className="w-5 h-5" /></button>
                            </div>
                        ))}
                    </div>

                    {/* awards starts */}
                    <div className="awards mb-2">
                        <div className='flex items-center justify-between'>
                            <label htmlFor="workExperience" className="block text-sm font-medium leading-6 text-gray-900">Awards</label>

                            <span id="plusCircleIcon" onClick={() => appendAward({ awardName: '', year: '', aboutAward: '' })}><PlusCircleIcon className='w-5 h-5 text-gray-500 hover:text-gray-700 active:text-gray-500'></PlusCircleIcon></span>
                            {/* onClick={addAwardFields} */}
                        </div>

                        {/* Dynamic Awards Fields */}
                        {awardFields.map((item, index) => (
                            <div key={item.id} className="awardContainer mt-4 border-b pb-4">
                                <div className="awardsContainer grid md:gap-5 grid-cols-1 md:grid-cols-2">
                                    <input {...register(`awards.${index}.awardName`, { required: true })}  placeholder="Award Name" className="block w-full rounded-md px-2 py-1.5 border border-gray-300 focus:outline-[#4a817d] shadow-sm" />

                                    <input {...register(`awards.${index}.year`, { required: true })} placeholder="Year" className="block w-full rounded-md px-2 py-1.5 border border-gray-300 focus:outline-[#4a817d] shadow-sm" />
                                </div>

                                <textarea {...register(`awards.${index}.aboutAward`, { required: true })} placeholder="Write here about award..." rows="2" className="block w-full rounded-md px-2 py-1.5 mt-2 border border-gray-300 focus:outline-[#4a817d] shadow-sm"></textarea>

                                <button type="button" onClick={() => removeAward(index)} className="text-gray-500 hover:text-red-500 mt-2"><TrashIcon className="w-5 h-5" /></button>
                            </div>
                        ))}
                    </div>


                    {/* aboutDoctor div starts */}
                    <div className="about mb-2">
                        <label htmlFor="about" className='block text-sm font-medium leading-6 text-gray-900'>About Doctor</label> 

                        <div className="mt-1">
                            <textarea name="about" id="about" rows="5" autoComplete='off' placeholder='Write here about doctor...' className="block w-full rounded-md px-2 py-1.5 border border-gray-300 focus:outline-[#4a817d] shadow-sm" {...register("about", { required: true })}></textarea>
                        </div>
                    </div>

                    <div className="uploadImage mb-2">
                        <label htmlFor="uploadImage" className='block text-sm font-medium leading-6 text-gray-900'>Upload Image</label>

                        <div className="relative mt-1 inline-flex w-full items-center gap-2 rounded border border-slate-200 text-sm text-slate-500">
                            <input id="file-upload" name="file-upload" type="file" className="peer order-2 [&::file-selector-button]:hidden" {...register("uploadImage", { required: true })} accept='image/png, image/jpg, image/jpeg' onChange={e => handleChange(e)} />

                            <label htmlFor="file-upload" className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded bg-[#F7A582] px-6 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-[#f7824f] active:bg-[#F7A582] focus:bg-[#F7A582] focus-visible:outline-none peer-disabled:cursor-not-allowed peer-disabled:border-[#F7A582] peer-disabled:bg-[#F7A582]">{" "}Upload a file{" "}</label>
                        </div>
                    </div>
        

                    <button className='py-2 w-full rounded-md text-center font-medium text-white border border-[#F7A582] bg-[#F7A582] hover:bg-[#f7824f] active:bg-[#F7A582] shadow-sm text-sm mt-2'>Add Doctor</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;