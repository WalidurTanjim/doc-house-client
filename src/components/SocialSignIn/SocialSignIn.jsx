import React from 'react';
import googleIcon from '../../assets/images/google_icon.png';

const SocialSignIn = ({ text }) => {
    return (
        <div className='mb-3'>
            <button className='py-2 w-full rounded-md text-center font-medium text-slate border border-gray-300 hover:bg-gray-200 active:bg-transparent shadow-sm text-sm mt-2 flex items-center justify-center'><img src={googleIcon} alt="" className='w-[20px] h-[20px] me-3' /> {text} Google</button>
        </div>
    );
};

export default SocialSignIn;