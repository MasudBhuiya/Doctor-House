import React from 'react';
import '../Home/Banner.css'
import { FaStar } from 'react-icons/fa';
import { SlLocationPin } from 'react-icons/sl';
import { useLoaderData } from 'react-router-dom';
const DoctorProfile = () => {
    const doctorData = useLoaderData();
    console.log(doctorData);
    return (
        <>
            <div className='img  h-[350px] -mt-28'>
                <div className='max-w-[1440px] mx-auto'>
                <h1 className='pt-48 text-white ps-10'>Home/Doctor Profile</h1>
                <h1 className='text-white text-4xl font-bold ps-10'>Doctor Profile</h1>
                </div>
            </div>
            <div className='max-w-[1460px] mx-auto px-5'>
                <div className="card lg:card-side bg-base-100 shadow-xl mt-20 mb-12 md:px-8 md:py-5">
                    <figure><img className='rounded-lg md:w-[550px] ' src={doctorData?.image} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold">{doctorData?.name}</h2>
                        <h2>{doctorData?.education}</h2>
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

            <div className=' shadow-xl max-w-[1440px] mx-auto px-5'>
                <div className='sm:space-x-3 sm:w-[380px] md:w-full border-2 sm:pe-5 my-6 font-bold text-sm rounded-md flex justify-between items-center '>
                    <button className='btn btn-primary'>Overview</button>
                    <p>Locations</p>
                    <p>Reviews</p>
                    <p>Business Hours</p>
                </div>
                <h2 className='text-2xl font-bold'>About Me</h2>
                <p className='my-3'>{doctorData?.about_me} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, labore sapiente corporis tempora, voluptas commodi harum ipsum vero veritatis assumenda, repudiandae beatae error. Deleniti veritatis ipsam culpa magni qui ab ex inventore provident eveniet autem, dolore suscipit laboriosam exercitationem eum!</p>

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
                        {
                            doctorData?.work_experience.map(work => <div className='mb-3'>
                            <li className='font-bold'>{work?.clinic}</li>
                        <p className='ms-6'>{work?.position} ({work?.years} years)</p>
                            </div>)
                        }
                        <br />
                        <h1 className='text-2xl font-bold'>Services</h1>
                        <br />
                        {
                            doctorData?.services.map(work => <li>{work}</li>)
                        }
                    </div>


                    <div className='mb-4'>
                        <h1 className='font-bold text-2xl'>Awards</h1>
                        <br />
                        {
                            doctorData?.awards.map(awd => <>
                            <p className='ms-6 font-bold'>{awd}</p>
                        <p className='ms-6'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus.
                            Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                        <br />
                            </>)
                        }
                            <br />
                            <h1 className='font-bold text-2xl'>Specializations</h1>
                            <br />
                            {
                            doctorData?.awards.map(awd => <li>{awd}</li>
                            )
                        }
                            {/* <li>Children Care</li>
                            <li>Dental Care</li>
                            <li>Oral and Maxillofacial Surgery</li>
                            <li>Orthodontist</li>
                            <li>Periodontist</li>
                            <li>Prosthodontics</li> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DoctorProfile;