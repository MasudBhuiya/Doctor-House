import React from 'react';
import "../Home/Banner.css"
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';

const Appointment = () => {
    return (
        <div className=''>
            <div className='img   h-[350px] -mt-28'>
                <div className='max-w-[1440px] mx-auto px-5'>
                <h1 className='pt-48 text-white'>Home/Appointment</h1>
                <h1 className='text-white text-4xl font-bold'>Appointment</h1>
                </div>
            </div>
            <div className='grid md:grid-cols-2 max-w-[1440px] mx-auto items-center mt-20 md:mt-32  px-5'>
                <div className='card sm:w-80  p-6  mx-auto shadow-lg'>
                    <h1 className='flex justify-between items-center'><span className='font-bold text-lg'>April 2023</span><span className='flex gap-3'><FaLessThan></FaLessThan> <FaGreaterThan></FaGreaterThan></span></h1>
                    <div className='flex justify-between '>
                    <div className='mt-5 '>
                        <p className='font-bold mb-4'>SU</p>
                        <br />
                        <p className='mt-2'>3</p>
                        <p className='mt-2'>10</p>
                        <p className='mt-2'>17</p>
                        <p className='mt-2'>24</p>
                    </div> 
                    <div className='mt-5 '>
                        <p className='font-bold mb-4 '>MO</p>
                        <br />
                        <p className='mt-2'>4</p>
                        <p className='mt-2'>11</p>
                        <p className='mt-2'>18</p>
                        <p className='mt-2'>25</p>
                    </div>
                    <div className='mt-5 '>
                        <p className='font-bold mb-4'>TU</p>
                        <br />
                        <p className='mt-2'>5</p>
                        <p className='mt-2'>12</p>
                        <p className='mt-2'>19</p>
                        <p className='mt-2'>26</p>
                    </div>
                    <div className='mt-5 '>
                        <p className='font-bold mb-4'>WE</p>
                        <br />
                        <p className='mt-2'>6</p>
                        <p className='mt-2'>13</p>
                        <p className='mt-2'>20</p>
                        <p className='mt-2'>27</p>
                    </div>
                    <div className='mt-5 '>
                        <p className='font-bold mb-4'>TH</p>
                        <br />
                        <p className='mt-2'>7</p>
                        <p className='mt-2'>14</p>
                        <p className='mt-2'>21</p>
                        <p className='mt-2'>28</p>
                    </div>
                    <div className='mt-5 '>
                        <p className='font-bold mb-4'>FR</p>
                        <p className=''>1</p>
                        <p className='mt-2'>8</p>
                        <p className='mt-2'>15</p>
                        <p className='mt-2'>22</p>
                        <p className='mt-2'>29</p>
                    </div>
                    <div className='mt-5 '>
                        <p className='font-bold mb-4'>SA</p>
                        <p className=''>2</p>
                        <p className='mt-2'>9</p>
                        <p className='mt-2'>16</p>
                        <p className='mt-2'>23</p>
                        <p className='mt-2'>30</p>
                    </div>
                    </div>
                    <div>
                    </div>
                </div>
                <div>
                    <img className='rounded-md w-full mx-auto' src="https://i.ibb.co/p22jcHX/Screenshot-2023-11-27-002445.png" alt="" />
                </div>
            </div>


            <div className='mt-20 md:mt-32 px-5'>
                <p className='text-orange-300 text-center'>Available Services on April 30, 2022</p>
                
                <h1 className='text-4xl font-bold text-center px-5'>Available slots for Teeth Orthodontics.</h1>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-[1440px] mx-auto mt-14 mb-20'>
                <div className="card w-full shadow-lg">
                    <div className="card-body flex items-center justify-center">
                        <div className='flex gap-8 items-center justify-between'>
                        <div className='text-5xl mt-2'>
                        <img className='rounded-lg' src="https://i.ibb.co/tz5VyBj/Screenshot-2023-11-27-010059.png" alt="" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-3">Teeth</h2>
                            <h2 className="text-2xl font-bold mb-3">Orthodontics</h2>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card w-full shadow-lg">
                    <div className="card-body flex items-center justify-center">
                        <div className='flex gap-8 items-center justify-between'>
                        <div className='text-5xl mt-2'>
                        <img className='rounded-lg' src="https://i.ibb.co/c8FrGzz/Screenshot-2023-11-27-010002.png" alt="" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-3">Cosmetic</h2>
                            <h2 className="text-2xl font-bold mb-3">Dentisty</h2>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card w-full shadow-lg">
                    <div className="card-body flex items-center justify-center">
                        <div className='flex gap-8 items-center justify-between'>
                        <div className='text-5xl mt-2'>
                        <img className='rounded-lg' src="https://i.ibb.co/c8FrGzz/Screenshot-2023-11-27-010002.png" alt="" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-3">Teeth</h2>
                            <h2 className="text-2xl font-bold mb-3">Cleaning</h2>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card w-full shadow-lg">
                    <div className="card-body flex items-center justify-center">
                        <div className='flex gap-8 items-center justify-between'>
                        <div className='text-5xl mt-2'>
                        <img className='rounded-lg' src="https://i.ibb.co/j3w6XwJ/Screenshot-2023-11-27-010021.png" alt="" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-3">Cavity</h2>
                            <h2 className="text-2xl font-bold mb-3">Protection</h2>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card w-full shadow-lg">
                    <div className="card-body flex items-center justify-center">
                        <div className='flex gap-8 items-center justify-between'>
                        <div className='text-5xl mt-2'>
                        <img className='rounded-lg' src="https://i.ibb.co/h9zD8JZ/Screenshot-2023-11-27-010037.png" alt="" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-3">Pediatric </h2>
                            <h2 className="text-2xl font-bold mb-3">Dental</h2>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card w-full shadow-lg">
                    <div className="card-body flex items-center justify-center">
                        <div className='flex gap-8 items-center justify-between'>
                        <div className='text-5xl mt-2'>
                        <img className='rounded-lg' src="https://i.ibb.co/tz5VyBj/Screenshot-2023-11-27-010059.png" alt="" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-3">Oral</h2>
                            <h2 className="text-2xl font-bold mb-3">Surgery</h2>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>


            <h1 className='text-4xl font-bold text-center'>Please select a service</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-[1440px] mx-auto px-5 mt-14 mb-20'>
            <div className="card w-full shadow-lg py-10">
                    <div className="card-body flex items-center justify-center">
                        <div className='text-center'>
                        <div className='flex items-center justify-center'>
                        <img className='rounded-full h-32 mb-6' src="https://i.ibb.co/tz5VyBj/Screenshot-2023-11-27-010059.png" alt="" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-3">Teeth Prthodontics</h2>
                            <h2 className="text-md font-bold mb-8">8:00 AM - 9:00 AM</h2>
                        </div>
                        <button className="btn px-10 text-white bg-orange-300 hover:bg-orange-400">Book Appointment</button>
                        </div>
                    </div>
                </div>
            <div className="card w-full shadow-lg py-10">
                    <div className="card-body flex items-center justify-center">
                        <div className='text-center'>
                        <div className='flex items-center justify-center'>
                        <img className='rounded-full h-32 mb-6' src="https://i.ibb.co/tz5VyBj/Screenshot-2023-11-27-010059.png" alt="" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-3">Cosmetic Dentisty</h2>
                            <h2 className="text-md font-bold mb-8">8:00 AM - 9:00 AM</h2>
                        </div>
                        <button className="btn px-10 text-white bg-orange-300 hover:bg-orange-400">Book Appointment</button>
                        </div>
                    </div>
                </div>
            <div className="card w-full shadow-lg py-10">
                    <div className="card-body flex items-center justify-center">
                        <div className='text-center'>
                        <div className='flex items-center justify-center'>
                        <img className='rounded-full h-32 mb-6' src="https://i.ibb.co/c8FrGzz/Screenshot-2023-11-27-010002.png" alt="" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-3">Teeth Cleaning</h2>
                            <h2 className="text-md font-bold mb-8">8:00 AM - 9:00 AM</h2>
                        </div>
                        <button className="btn px-10 text-white bg-orange-300 hover:bg-orange-400">Book Appointment</button>
                        </div>
                    </div>
                </div>
            <div className="card w-full shadow-lg py-10">
                    <div className="card-body flex items-center justify-center">
                        <div className='text-center'>
                        <div className='flex items-center justify-center'>
                        <img className='rounded-full h-32 mb-6' src="https://i.ibb.co/j3w6XwJ/Screenshot-2023-11-27-010021.png" alt="" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-3">Cavity Protection</h2>
                            <h2 className="text-md font-bold mb-8">8:00 AM - 9:00 AM</h2>
                        </div>
                        <button className="btn px-10 text-white bg-orange-300 hover:bg-orange-400">Book Appointment</button>
                        </div>
                    </div>
                </div>
            <div className="card w-full shadow-lg py-10">
                    <div className="card-body flex items-center justify-center">
                        <div className='text-center'>
                        <div className='flex items-center justify-center'>
                        <img className='rounded-full h-32 mb-6' src="https://i.ibb.co/h9zD8JZ/Screenshot-2023-11-27-010037.png" alt="" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-3">Pediatric Dental</h2>
                            <h2 className="text-md font-bold mb-8">8:00 AM - 9:00 AM</h2>
                        </div>
                        <button className="btn px-10 text-white bg-orange-300 hover:bg-orange-400">Book Appointment</button>
                        </div>
                    </div>
                </div>
            <div className="card w-full shadow-lg py-10">
                    <div className="card-body flex items-center justify-center">
                        <div className='text-center'>
                        <div className='flex items-center justify-center'>
                        <img className='rounded-full h-32 mb-6' src="https://i.ibb.co/tz5VyBj/Screenshot-2023-11-27-010059.png" alt="" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-3">Oral Surgery</h2>
                            <h2 className="text-md font-bold mb-8">8:00 AM - 9:00 AM</h2>
                        </div>
                        <button className="btn px-10 text-white bg-orange-300 hover:bg-orange-400">Book Appointment</button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Appointment;