import React from 'react';
import vectorDot from "../../../assets/images/vector_dot.png";

const ProfileOverview = ({ doctorInfo }) => {
    const { about, education, workExperience, service, awards } = doctorInfo;
    // console.log(doctorInfo)

    return (
        <div className='my-5'>
            {/* aboutMe div starts */}
            <div className='aboutMe mb-6'>
                <h1 className='text-xl font-medium text-slate-800 mb-2'>About Me</h1>
                <p className='text-gray-500 text-sm'>{about}</p>
            </div>

            <div className='grid gap-5 grid-cols-1 md:grid-cols-2'>
                {/* leftContent div starts */}
                <div className='leftContent'>
                    {/* educationContainer div starts */}
                    <div className="educationContainer mb-6">
                        <h1 className='text-xl font-medium text-slate-800 mb-2'>Education</h1>

                        {
                            education?.map((edu, idx) => {
                                return (
                                    <div key={idx} className='mb-1 ps-3'>
                                        <h1 className='font-medium text-slate-800'>{edu.university}</h1>
                                        <p className='text-xs text-gray-600'>{edu.degree}</p>
                                        <p className='text-xs text-gray-600'>{edu.session}</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* workExperienceContainer div starts */}
                    <div className="workExperienceContainer mb-6">
                        <h1 className='text-xl font-medium text-slate-800 mb-2'>Work & Experience</h1>


                        {
                            workExperience?.map((work, idx) => {
                                return (
                                    <div key={idx} className='mb-1 ps-3'>
                                        <h1 className='font-medium text-slate-800'>{work.experience}</h1>
                                        <p className='text-xs text-gray-600'>{work.session}</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* servicesContainer div starts */}
                    <div className="servicesContainer mb-6">
                        <h1 className='text-xl font-medium text-slate-800 mb-2'>Services</h1>

                        {
                            service?.map((srv, idx) => {
                                return (
                                    <div key={idx} className='mb-1 ps-3'>
                                        <p className='text-sm text-gray-600 flex items-center'>{srv}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                {/* rightContent div starts */}
                <div className="rightContent">
                    {/* awardsContainer div starts */}
                    <div className="awardsContainer mb-6">
                        <h1 className='text-xl font-medium text-slate-800 mb-2'>Awards</h1>

                        {
                            awards?.map((ard, idx) => {
                                return (
                                    <div key={idx} className='mb-3 ps-3'>
                                        <p className="text-xs text-gray-600">{ard.year}</p>
                                        <h1 className='font-medium text-slate-800'>{ard.awardName}</h1>
                                        <p className='text-sm text-gray-600'>{ard.aboutAward}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileOverview;