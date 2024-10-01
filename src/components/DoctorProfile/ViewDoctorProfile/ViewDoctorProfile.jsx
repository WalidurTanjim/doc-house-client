import React, { useState } from 'react';
import PageHeading from '../../PageHeading/PageHeading';
import { useParams } from 'react-router-dom';
import useDoctors from '../../../hooks/useDoctors';
import mapPin from '../../../assets/images/doctor_location.png';
import ProfileOverview from '../ProfileOverview/ProfileOverview';
import './ViewDoctorProfile.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProfileReviews from '../ProfileReviews/ProfileReviews';
import ProfileLocation from '../ProfileLocation/ProfileLocation';
import ProfileBusinessHours from '../ProfileBusinessHours/ProfileBusinessHours';
// import 'react-tabs/style/react-tabs.css';

const tabs = [
    { name: "Overview" },
    { name: "Locations" },
    { name: "Reviews" },
    { name: "Business Hours" }
];

const ViewDoctorProfile = () => {
    const [ selectedTab, setSelectedTab ] = useState(0);

    const { id } = useParams();
    const [ doctors ] = useDoctors();
    const selectedDoctor = doctors.find(doctor => doctor._id === id);
    
    const { _id, image, name, degree, location, service, about, awards, education, workExperience, ratings } = selectedDoctor;
    // console.log(selectedDoctor);

    return (
        <section className='doctorProfile'>
            {/* DoctorProfile heading */}
            <PageHeading recentPath="Doctor Profile"></PageHeading>

            {/* profileInfoContainer div starts */}
            <div className="profileInfoContainer container mx-auto px-6 my-16">
                {/* doctorPersonalInfo div starts */}
                <div className="personalInfo p-5 rounded-md grid gap-5 grid-cols-1 md:grid-cols-3 border">
                    <div className='col-span-1 w-full h-[200px]'>
                        <img src={image} alt="" className='w-full h-full rounded-md bg-gray-200' />
                    </div>

                    <div className='col-span-2 w-full'>
                        <h1 className="text-2xl font-semibold text-slate-900">{name}</h1>
                        <p className='text-gray-500 my-1'>{degree}</p>
                        <p className='text-xs text-gray-500 flex items-center'><img src={mapPin} alt="" className='w-4 h-4 me-1' /> {location}</p>

                        <div className='flex gap-3 items-center mt-2'>
                            {
                                service.map((s, idx) => {
                                    return (
                                        <p key={idx} className='text-xs text-gray-500 p-2 border rounded-md cursor-default hover:shadow-sm transition-all ease-in-out duration-100'>{s}</p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                {/* doctorDetails div starts */}
                <div className="doctorDetails p-5 mt-10 rounded-md border">
                    <Tabs>
                        <TabList className="tabList flex items-center ">
                            {
                                tabs.map((tab, idx) => {
                                    return <Tab key={idx} className={`${selectedTab === idx ? 'active' : ''} font-medium rounded-t-md py-2 px-5 text-slate-800 active:bg-[#F7A582] cursor-pointer transition-all ease-in-out duration-200`} onClick={() => setSelectedTab(idx)}>{tab.name}</Tab>
                                })
                            }
                        </TabList>

                        <TabPanel><ProfileOverview doctorInfo={selectedDoctor}></ProfileOverview></TabPanel>

                        <TabPanel><ProfileLocation></ProfileLocation></TabPanel>

                        <TabPanel><ProfileReviews></ProfileReviews></TabPanel>

                        <TabPanel><ProfileBusinessHours></ProfileBusinessHours></TabPanel>
                    </Tabs>
                </div>
            </div>
        </section>
    );
};

export default ViewDoctorProfile;