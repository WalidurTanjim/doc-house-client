import React from 'react';

const ProfileOverview = ({ doctorInfo }) => {
    const { about, education, workExperience, service, awards } = doctorInfo;
    console.log(doctorInfo)
    return (
        <div className='my-5'>
            <div className='aboutMe mb-5'>
                <h1 className='text-xl font-medium text-slate-800 mb-2'>About Me</h1>
                <p className='text-gray-500 text-sm'>{about}</p>
            </div>

            <div className='grid gap-5 grid-cols-1 md:grid-cols-2'>
                {/* leftContent div starts */}
                <div className='leftContent'>
                    <div className="educationContainer mb-5">
                        <h1 className='text-xl font-medium text-slate-800 mb-2'>Education</h1>
                    </div>

                    <div className="workExperienceContainer mb-5">
                        <h1 className='text-xl font-medium text-slate-800 mb-2'>Work & Experience</h1>
                    </div>

                    <div className="servicesContainer mb-5">
                        <h1 className='text-xl font-medium text-slate-800 mb-2'>Services</h1>
                    </div>
                </div>

                {/* rightContent div starts */}
                <div className="rightContent">
                    <div className="awardsContainer mb-5">
                        <h1 className='text-xl font-medium text-slate-800 mb-2'>Awards</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileOverview;