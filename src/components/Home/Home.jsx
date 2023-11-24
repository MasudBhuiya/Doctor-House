import React from 'react';
import ContactUs from './ContactUs';
import Banner from './Banner';
import Services from './Services';
import Patients from './Patients';
import Doctors from './Doctors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Patients></Patients>
            <Doctors></Doctors>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;