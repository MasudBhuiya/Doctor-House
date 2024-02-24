import React from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";
const Choose = () => {
    return (
        <div className='mt-20 md:mt-32'>
            <h1 className='text-5xl font-bold text-center'>why choose us</h1>
            <p className='max-w-[50%] mx-auto text-center mt-4'>Mental health doctors provide a variety of services designed to help individuals manage and overcome mental health conditions, including psychology_</p>
            <div className='grid md:grid-cols-2 items-center mt-16'>
                <img className='w-[600px]' src="https://t3.ftcdn.net/jpg/04/30/74/30/240_F_430743005_vzOKdtCyETerNY4xOCNiSu7tWsEHvdXg.jpg" alt="" />
                <div>
                    <h2 className='text-4xl font-bold'>Benefits Of Talkspace</h2>
                    <p className='font-semibold mt-4'>Our team of distinguished physicians at Doctor House combines unparalleled medical knowledge with cutting-edge technology to deliver precise diagnoses and effective treatments. Trust in our commitment to excellence, where your health is our foremost priority.</p>
                    <div className='flex gap-16 mt-8 font-semibold text-2xl'>
                        <div className=''>
                        <div className='flex items-center gap-4 mb-2'>
                        <FaRegCircleCheck className='text-green-800 text-3xl'/>
                        <p> Asessment</p>
                        </div>
                        <div className='flex items-center gap-4 mb-2'>
                        <FaRegCircleCheck className='text-green-800 text-3xl'/>
                        <p>Exterior</p>
                        </div>
                        <div className='flex items-center gap-4 mb-2'>
                        <FaRegCircleCheck className='text-green-800 text-3xl'/>
                        <p>Interior</p>
                        </div>
                        
                        
                        </div>
                    <div className=''>
                    <div className='flex items-center gap-4 mb-2'>
                        <FaRegCircleCheck className='text-green-800 text-3xl'/>
                        <p>Underhood</p>
                        </div>
                        <div className='flex items-center gap-4 mb-2'>
                        <FaRegCircleCheck className='text-green-800 text-3xl'/>
                        <p>Under Doctor</p>
                        </div>
                        
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;