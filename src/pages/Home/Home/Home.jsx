import React from 'react';
import Banner from '../Banner/Banner';
import InfoCard from '../InfoCard/InfoCard';
import PatientReview from '../PatientReview/PatientReview';
import OurServices from '../OurServices/OurServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <InfoCard></InfoCard>
            <PatientReview></PatientReview>
        </div>
    );
};

export default Home;