import React, { useEffect, useState } from 'react';
import ContactUs from './ContactUs';
import Banner from './Banner';
import Services from './Services';
import Patients from './Patients';
import Doctors from './Doctors';
import Choose from './Choose';
import Contact from './Contact';

const Home = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(()=>{
        fetch('https://doctor-house-server-two.vercel.app/doctors')
        .then(res=> res.json())
        .then(data => setDoctors(data))
        .catch(error => {
            console.error('Error:', error);
          });
    },[])
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-[1440px] mx-auto'>
            <Services></Services>
            <Patients></Patients>
            <div>
            <h1 className='text-center font-bold text-4xl mb-6'>Our Expert Doctors</h1>
            <p className='w-[60%] mx-auto text-center  mb-10'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {
                    doctors?.map(doctor => <Doctors key={doctor.id} doctor={doctor}></Doctors>)
                }
                </div>
            </div>
            {/* <Doctors></Doctors> */}
            <Choose></Choose>
            <Contact></Contact>
        </div>
        </div>
    );
};

export default Home;