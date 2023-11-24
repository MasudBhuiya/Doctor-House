import React from 'react';
import "./Banner.css"
const Banner = () => {
    return (
        <div className='img  h-[500px] -mt-20 md:h-[600px]'>
            <div className='pt-40 flex  justify-around'>
                <div className='text-white'>
                    <h1 className='text-4xl font-bold mb-4'>Your Best Medical <br /> Help Center</h1>
                    <p>Lorem Ipsum is simply dummy text they are printing typesetting <br /> has been the industry’s stardard.</p>
                    <button className="btn btn-primary mt-4">All Services</button>
                </div>
                <div>
                    <img src="https://i.ibb.co/vmJMmbz/doctorsss.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;