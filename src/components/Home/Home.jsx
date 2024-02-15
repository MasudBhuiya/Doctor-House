import React, { useEffect, useState } from 'react';
import ContactUs from './ContactUs';
import Banner from './Banner';
import Services from './Services';
import Patients from './Patients';
import Doctors from './Doctors';

const Home = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/doctors')
        .then(res=> res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-[1440px] mx-auto'>
            <Services></Services>
            <Patients></Patients>
            <div>
            <h1 className='text-center font-bold text-4xl mb-6'>Our Expert Doctors</h1>
            <p className='w-[80%] mx-auto text-center text-sm mb-10'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {
                    doctors?.map(doctor => <Doctors key={doctor.id} doctor={doctor}></Doctors>)
                }
                </div>
            </div>
            {/* <Doctors></Doctors> */}
            <ContactUs></ContactUs>
        </div>
        </div>
    );
};

export default Home;