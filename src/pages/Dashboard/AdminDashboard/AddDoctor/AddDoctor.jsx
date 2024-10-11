import React from 'react';
import { useForm } from "react-hook-form"
import DashboardRoutes from '../../../../components/DashboardRoutes/DashboardRoutes';

const AddDoctor = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm()
    
    const onSubmit = (data) => {
        console.log(data);
    }


    return (
        <div className="profileInfoContainer container mx-auto px-6 my-16">
            <DashboardRoutes></DashboardRoutes>

            <h2 className="text-lg font-medium text-gray-800 dark:text-white">Add New Doctor</h2>

            {/* form div starts */}
            <div className='my-10 w-full'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Form</h1>

                    <button className='py-2 w-full rounded-md text-center font-medium text-white border border-[#F7A582] bg-[#F7A582] hover:bg-[#f7824f] active:bg-[#F7A582] shadow-sm text-sm mt-2'>Add Doctor</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;