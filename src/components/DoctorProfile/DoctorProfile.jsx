import React from 'react';
import '../Home/Banner.css'
import { FaStar } from 'react-icons/fa';
import { SlLocationPin } from 'react-icons/sl';
const DoctorProfile = () => {
    return (
        <>
            <div className='img  h-[300px] -mt-28'>
                <h1 className='pt-40 text-white ps-10'>Home/Doctor Profile</h1>
                <h1 className='text-white text-4xl font-bold ps-10'>Doctor Profile</h1>
            </div>
            <div className='p-2'>
                <div className="card lg:card-side bg-base-100 shadow-xl mt-20 mb-12 md:px-8 md:py-5">
                    <figure><img className='rounded-lg' src="https://i.ibb.co/4fGmCss/Screenshot-2023-11-24-234757.png" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold">Dr. Ruby Perrin</h2>
                        <h2>MBBS, MD - General Medicine</h2>
                        <div className='flex text-2xl items-center text-orange-400 '>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar className='text-gray-300'></FaStar>
                            <span className='text-gray-500 ms-4'>(35)</span>
                        </div>
                        <h2 className='flex items-center'><span className='text-xl me-3'><SlLocationPin /></span> <span>Dhanmondi, Dhaka, Bangladesh-<span className='text-orange-500'>Get Directions</span></span></h2>
                        <div className='grid grid-cols-4 sm:grid-cols-5 w-fit gap-3 my-3'>
                            <img className='h-20 w-20 rounded-md' src="https://plus.unsplash.com/premium_photo-1663088767412-b10c8dc27ad1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                            <img className='h-20 w-20 rounded-md' src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                            <img className='h-20 w-20 rounded-md' src="https://images.unsplash.com/photo-1609207825181-52d3214556dd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D" alt="" />
                            <img className='h-20 w-20 rounded-md' src="https://images.unsplash.com/photo-1616391182219-e080b4d1043a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D" alt="" />
                            <img className='h-20 w-20 rounded-md' src="https://media.istockphoto.com/id/184958602/photo/at-the-dentist-room.jpg?s=612x612&w=0&k=20&c=gl2JpjrfStkGPwvvilay86ZBkuqwO7ss9nRCAW9XwlQ=" alt="" />
                        </div>
                        <div className="card-actions ">
                            <button className="btn btn-outline">Dental Filling</button>
                            <button className="btn btn-outline">Teeth Whitneing</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='p-3 shadow-xl mb-10 md:p-8'>
                <div className='sm:space-x-3 sm:w-[380px] md:w-full  border-2 sm:pe-5 my-6 font-bold text-sm rounded-md flex justify-between items-center '>
                    <button className='btn btn-primary'>Overview</button>
                    <p>Locations</p>
                    <p>Reviews</p>
                    <p>Business Hours</p>
                </div>
                <h2 className='text-2xl font-bold'>About Me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <div className='grid md:grid-cols-2'>
                    <div className='mb-4'>
                        <h1 className='font-bold text-2xl mt-3 mb-4'>Education</h1>
                        <li className='font-bold'>American Dental Medical University</li>
                        <p className='ms-6'>BDS</p>
                        <p className='ms-6'>1998 - 2003</p>
                        <li className='font-bold'>American Dental Medical University</li>
                        <p className='ms-6'>MDS</p>
                        <p className='ms-6'>2003 - 2005</p>
                        <br />
                        <h1 className='text-2xl font-bold'>Works & Experience</h1>
                        <br />
                        <li className='font-bold'>Glowing Smiles Family Dental Clinic</li>
                        <p className='ms-6'> 2010 - Present (5 years)</p>
                        <li className='font-bold'>Comfort Care Dental Clinic</li>
                        <p className='ms-6'> 2007 - 2010 (3 years)</p>
                        <li className='font-bold'>Dream Smile Dental Practice</li>
                        <p className='ms-6'> 2005 - 2007 (2 years)</p>
                        <br />
                        <h1 className='text-2xl font-bold'>Services</h1>
                        <br />
                        <li>Tooth cleaning</li>
                        <li>Root Canal Therapy</li>
                        <li>Implants</li>
                        <li>Composite Bonding</li>
                        <li>Fissure Sealants</li>
                        <li>Surgical Extractions</li>
                    </div>


                    <div className='mb-4'>
                        <h1 className='font-bold text-2xl'>Awards</h1>
                        <br />
                        <p className='ms-6'>July 2019</p>
                        <li className='font-bold'>Humanitarian Award</li>
                        <p className='ms-6'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus.
                            Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                        <br />
                        <p className='ms-6'> March 2011</p>
                        <li className='font-bold'>Certificate for International Volunteer Service</li>
                        <p className='ms-6'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus.
                            Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                        <br />
                        <p className='ms-6'>May 2008</p>
                        <li className='font-bold'>The Dental Professional of The Year Award</li>
                        <p className='ms-6'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus.
                            Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                            <br />
                            <h1 className='font-bold text-2xl'>Specializations</h1>
                            <br />
                            <li>Children Care</li>
                            <li>Dental Care</li>
                            <li>Oral and Maxillofacial Surgery</li>
                            <li>Orthodontist</li>
                            <li>Periodontist</li>
                            <li>Prosthodontics</li>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DoctorProfile;