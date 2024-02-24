import React from 'react';
import './ContactUs.css'
const About = () => {
    return (
        <div>
            <div className='img   h-[350px] -mt-28'>
                <div className='max-w-[1440px] mx-auto px-5'>
                <h1 className='pt-48 text-white'>Home/About</h1>
                <h1 className='text-white text-4xl font-bold'>About Us</h1>
                </div>
            </div>

            <div className='md:pt-32 md:flex px-5 items-center max-w-[1440px] mx-auto justify-between my-20'>
                <div className=''>
                    <h1 className='text-2xl md:text-6xl font-bold mb-4'>We`re a team of <br /> creators & innovators</h1>
                    <p className='max-w-[560px] font-medium'>Empowering Health, Transforming Lives. Welcome to Doctor House – Your Trusted Partner in Comprehensive Healthcare. Experience personalized care and advanced medical solutions for a healthier, happier life.</p>
                    <button className="btn btn-primary mt-4 font-bold">All Services</button>
                </div>
                <div className=''>
                <div className='about-img mt-10 md:-mt-20 relative'>
                    <img className='md:w-[500px] md:h-[430px] relative top-16 right-20' src="https://media.istockphoto.com/id/1459191178/photo/portrait-of-young-nurse-woman-at-hospital.jpg?s=612x612&w=0&k=20&c=9wdZMTchPRxMrMBC6K9U3t9niCJCfQx-cwRHSeQmP9Q=" alt="" />
                </div>
                </div>
            </div>


            <div className='pt-32 md:flex px-5 justify-center gap-8 max-w-[1440px] mx-auto  my-20'>
                <div className='-ms-12'>
                <div className='bg-sky-500 h-20 w-20'>
                </div>
                    <div className='bg-sky-300 h-12 w-12 ms-20 '></div>
                </div>
                <div className=''>
                    <h1 className='text-6xl font-bold text-center'>The Values We <br />Live By</h1>
                    <p className='max-w-[560px] font-medium text-center mt-5'>Welcome to Doctor House – Your Trusted Partner in Comprehensive Healthcare. Experience personalized care and advanced medical solutions for a healthier, happier life.</p>
                </div>
            </div>
            

            
        </div>
    );
};

export default About;