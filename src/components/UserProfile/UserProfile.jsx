import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useFieldArray, useForm } from "react-hook-form";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserProfile = () => {
    const { user, updateUserProfileImage } = useAuth();
    const axiosSecure = useAxiosSecure();

    const [image, setImage] = useState('');
    // console.log("Image from profile:", image);

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
        previewFile(photoFile);
    }
    // upload image functions ends

    const { register, handleSubmit, control, reset, watch, formState: { errors } } = useForm();

    const onSubmit = async(data) => {
        // upload image to cloudinary and get image live link to save it db
        try{
            const result = await axiosSecure.post('/', {
                image: image
            })
            // console.log("Result from cloudinary:", result.data);
            if(result?.data){
                const image_live_link = result?.data?.secure_url; // image live link from cloudinary
                updateUserProfileImage(user, image_live_link)
                .then(() => {
                    console.log("Profile image upload successfully");
                    toast.success('Profile image added successfully', {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        progress: undefined,
                        theme: "light",
                    });
                })
                .catch(err => {
                    console.error(err);
                })
            }
        }catch(err){
            console.error(err);
        }
    };

    return (
        <div className='container mx-auto px-6 py-5 w-full'>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                {/* profile picture of user */}
                <div className='w-full h-[250px] flex items-center justify-center'>
                    {
                        user?.photoURL ?
                        <img src={user?.photoURL} alt="No Image Available" className='rounded-full w-[200px] h-[200px] md:h-[200px] border' /> : 
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1>No Image Available</h1>

                            <input type="file" className="cursor-pointer block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300" {...register("image", { required: true })} accept='image/png, image/jpg, image/jpeg' onChange={e => handleChange(e)} />

                            <button type='submit' className='text-sm px-4 py-1 rounded-md mt-2 text-white border border-[#F7A582] bg-[#F7A582] hover:bg-[#f7824f] active:bg-[#F7A582]'>Add Image</button>
                        </form>
                    }
                </div>

                {/* user info */}
                <div className='userInfo flex md:items-center'>
                    <div>
                        <h1 className='text-xl font-medium'>Welcome To Doc House <span className='text-cyan-400'>{user?.displayName}</span></h1>

                        <div className='mt-3'>
                            <p className='text-slate-700 font-medium'><span className='text-slate-700 text-xs font-normal bg-slate-200 px-1.5 rounded-full'>{user?.uid}</span></p>
                            <p className='text-slate-700 font-medium'>Email: <span className='text-gray-500 font-normal'>{user?.email}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;