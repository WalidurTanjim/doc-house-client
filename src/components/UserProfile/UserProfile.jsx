import React from 'react';
import useAuth from '../../hooks/useAuth';

const UserProfile = () => {
    const { user } = useAuth();

    return (
        <div className='container mx-auto px-6 py-5 w-full'>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                {/* profile picture of user */}
                <img src={user?.photoURL} alt="No Image Available" className='rounded-full w-full h-[200px] md:h-[300px]' />

                {/* user info */}
                <div className='userInfo'>
                    <h1 className='text-xl font-medium'>Welcome To Doc House <span className='text-cyan-400'>{user?.displayName}</span></h1>

                    <div className='mt-3'>
                        <p className='text-slate-700 font-medium'>User Id: <span className='text-gray-500 font-normal'>{user?.uid}</span></p>
                        <p className='text-slate-700 font-medium'>Email: <span className='text-gray-500 font-normal'>{user?.email}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;