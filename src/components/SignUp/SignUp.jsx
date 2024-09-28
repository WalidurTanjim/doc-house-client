import React, { useState } from 'react';
import signUpImage from '../../assets/images/signIn-image.png';
import plusIcon from '../../assets/images/signInPlus-icon.png';
import halfPill from '../../assets/images/half_pill.png';
import leanPill from '../../assets/images/lean_pill.png';
import verticalPill from '../../assets/images/vertical_pill.png';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [ showPassword, setShowPassword ] = useState(false);
    const [ errMsg, setErrMsg ] = useState('');

    return (
        <div className='w-full min-h-screen grid grid-cols-1 md:grid-cols-2'>
            {/* imageContainer div */}
            <div className='imageContainer relative bg-[#07332F] flex items-center justify-center p-6 mb-6 md:mb-0'>
                <img src={signUpImage} alt="Sign up image" className='w-3/5' />
                <img src={plusIcon} alt="" className='absolute top-0 right-0 w-1/3' />
                <img src={halfPill} alt="" className='absolute top-0 left-0 w-1/4' />
                <img src={verticalPill} alt="" className='absolute left-6 bottom-6 w-1/10 h-1/4' />
            </div>

            {/* formContainer div */}
            <div className='formContainer container mx-auto p-6 flex items-center justify-center'>
                <div className='border rounded-md p-5 w-full lg:w-[550px]'>
                    <h1 className='text-2xl lg:font-4xl font-medium text-slate-900 text-center'>Sign Up to Doc House</h1>

                    <form className='my-5'>
                        {/* fullName div starts */}
                        <div className='fullName mb-2'>
                            <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>

                            <div className="mt-1">
                                <input id="fullName" name="fullName" type="fullName" autoComplete="off" className="block w-full rounded-md px-2 py-1.5 border border-gray-300 focus:outline-[#4a817d] shadow-sm" />
                            </div>
                        </div>

                        {/* email div starts */}
                        <div className='email mb-2'>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email Address</label>

                            <div className="mt-1">
                                <input id="email" name="email" type="email" autoComplete="off" className="block w-full rounded-md px-2 py-1.5 border border-gray-300 focus:outline-[#4a817d] shadow-sm" />
                            </div>
                        </div>

                        {/* createPassword div starts */}
                        <div className='createPassword mb-2'>
                            <label htmlFor="createPassword" className="block text-sm font-medium leading-6 text-gray-900">Create Password</label>

                            <div className="mt-1">
                                <input id="createPassword" name="createPassword" type={showPassword ? 'text' : 'password'} autoComplete="off" className="block w-full rounded-md px-2 py-1.5 border border-gray-300 focus:outline-[#4a817d] shadow-sm" />
                            </div>
                        </div>

                        {/* repeatPassword div starts */}
                        <div className='repeatPassword mb-2'>
                            <label htmlFor="repeatPassword" className="block text-sm font-medium leading-6 text-gray-900">Repeat Password</label>

                            <div className="mt-1">
                                <input id="repeatPassword" name="repeatPassword" type={showPassword ? 'text' : 'password'} autoComplete="off" className="block w-full rounded-md px-2 py-1.5 border border-gray-300 focus:outline-[#4a817d] shadow-sm" />
                            </div>
                        </div>

                        {/* showPassword div starts */}
                        <div className="showPassword mt-4 mb-2 flex items-center text-xs">
                            <input type="checkbox" name="showPassword" id="showPassword" onClick={() => setShowPassword(!showPassword)} />
                            <p className='ms-2'>Show Password</p>
                        </div>

                        { errMsg ? <p className='text-xs text-red-500 font-medium'>{errMsg}</p> : undefined }

                        <button className='py-2 w-full rounded-md text-center font-medium text-white border border-[#F7A582] bg-[#F7A582] hover:bg-[#f7824f] active:bg-[#F7A582] shadow-sm text-sm mt-2'>Sign Up</button>
                    </form>

                    <div className="text-center text-xs text-gray-500">
                        <h1>Already Have An Account? <Link to="/signIn" className='text-[#F7A582] hover:text-[#f7824f] active:text-[#F7A582]'>Sign In</Link></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;