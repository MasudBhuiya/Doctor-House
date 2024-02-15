import React from 'react';
import { LuClock3 } from "react-icons/lu";
import { FiPhoneOutgoing } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl"
const Services = () => {
    return (
        <div>
            <div className='grid md:grid-cols-2 gap-6 px-5 mt-20'>
                <div className='flex items-center justify-center md:justify-start'>
                    <img className='max-h-[880px] lg:w-[80%]' src="https://i.ibb.co/48pxrf6/Rectangle-20078.png" alt="" />
                </div>
                <div className='max-h-fit'>
                    <h1 className='text-3xl font-bold'>Our Services</h1>
                    <p className=' mt-3 text-sm'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className=' border-2 sm:pe-5 my-6 font-bold text-sm rounded-md flex justify-between items-center '>
                        <button className='btn btn-primary'>Cavity Protection</button>
                        <p>Cosmetic Dentisty</p>
                        <p>Oral Surgery</p>
                    </div>
                    <img className=' rounded-lg w-full' src="https://i.ibb.co/vP0gNXL/teeth.png" alt="" />
                    <h1 className='text-2xl font-bold mt-7 mb-3'>Electro  Gastrology Therapy</h1>
                    <p className='text-sm'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                    <p className='mt-2 text-sm'>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <button className="btn btn-primary mt-4">All Services</button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-5 mt-28'>
                <div className="card w-full bg-emerald-950 text-white shadow-xl">
                    <div className="card-body flex items-center justify-center">
                        <div className='flex gap-8  justify-between'>
                        <div className='text-5xl mt-2'>
                            <LuClock3 />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-3">Opening Hours</h2>
                            <h2 className="">Open 9.00 am to 5.00pm</h2>
                            <h2 className="">Everyday</h2>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="card w-full bg-orange-300 text-white shadow-xl">
                    <div className="card-body flex items-center justify-center">
                        <div className='flex gap-8  justify-between'>
                        <div className='text-5xl mt-2'>
                        <SlLocationPin />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-3">Our Locations</h2>
                            <h2 className="">Dhanmondi 17, Dhaka </h2>
                            <h2 className="">-1200, Bangladesh</h2>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-emerald-950 text-white shadow-xl">
                    <div className="card-body flex items-center justify-center">
                        <div className='flex gap-8  justify-between'>
                        <div className='text-5xl mt-2'>
                        <FiPhoneOutgoing />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-3">Contact Us</h2>
                            <h2 className="">+88 01750 00 00 00 </h2>
                            <h2 className="">+88 01750 00 00 00</h2>
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Services;