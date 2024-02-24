import React from 'react';
import "./Banner.css"
const Banner = () => {
    return (
        <div className='img h-fit  -mt-24 md:-mt-40  md:h-[900px]'>
            <div className='pt-24 md:pt-64 md:flex px-5 items-center max-w-[1440px] mx-auto justify-between'>
                <div className='text-white'>
                    <h1 className='text-2xl md:text-7xl font-bold mb-4'>Your Best Medical <br /> Help Center</h1>
                    <p className='max-w-[560px]'>Empowering Health, Transforming Lives. Welcome to Doctor House – Your Trusted Partner in Comprehensive Healthcare. Experience personalized care and advanced medical solutions for a healthier, happier life.</p>
                    <button className="btn btn-primary mt-4">All Services</button>
                </div>
                <div>
                    <img className='md:w-[600px]' src="https://i.ibb.co/vmJMmbz/doctorsss.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;