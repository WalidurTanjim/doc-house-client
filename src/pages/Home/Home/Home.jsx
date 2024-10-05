import React from "react"
import Banner from '../Banner/Banner';
import InfoCard from '../InfoCard/InfoCard';
import PatientReview from '../PatientReview/PatientReview';
import OurServices from '../OurServices/OurServices';
import ExpertDoctors from '../ExpertDoctors/ExpertDoctors';
import ContactWithUs from '../ContactWithUs/ContactWithUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <InfoCard></InfoCard>
            <PatientReview></PatientReview>
            <ExpertDoctors></ExpertDoctors>
            <ContactWithUs></ContactWithUs>
        </div>
    );
};

export default Home;