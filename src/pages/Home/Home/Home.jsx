import React from 'react';
import Banner from '../Banner/Banner';
import InfoCard from '../InfoCard/InfoCard';
import PatientReview from '../PatientReview/PatientReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <PatientReview></PatientReview> */}
            <InfoCard></InfoCard>
        </div>
    );
};

export default Home;