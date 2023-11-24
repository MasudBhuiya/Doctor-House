import React from 'react';
import { FiPhoneOutgoing } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl"
const ContactUs = () => {
    return (
        <div className='p-6 md:p-20 bg-teal-950 rounded-md my-20 text-white'>
            <div className='md:flex items-center justify-around gap-6'>
                <div className='flex flex-col md:w-[40%]  justify-center'>
                    <h1 className='font-bold text-3xl mb-3'>Contact With Us</h1>
                    <p className='text-sm'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque br ipsa quae ab illo inve ntore veritatis et quasi.</p>
                    <p className='flex items-center mt-6'><span className='text-xl me-3'><FiPhoneOutgoing /></span> +88 01855223656</p>
                    <p className='flex items-center mt-6'><span className='text-xl me-3'><SlLocationPin /></span> Dhanmondi, Dhaka, Bangladesh</p>
                </div>
                <div className='md:w-[60%]'>
                <div className="">
                 <form  >
                <div className="grid md:grid-cols-2 my-4 gap-4">
                <div>
                <input className=" w-full rounded-xl h-12 ps-3 bg-teal-900 bg-opacity-60  text-white" placeholder="Name" type="text" name="from_name" />
                </div>
                <div>
                <input className=" w-full rounded-xl h-12 ps-3 bg-teal-900 bg-opacity-60 text-white" placeholder="Email" type="email" name="from_email" />
                </div>
                </div>
                <div className="grid md:grid-cols-2 my-4 gap-4">
                <div>
                <input className=" w-full rounded-xl h-12 ps-3 bg-teal-900 bg-opacity-60 text-white" placeholder="Mobile Number" type="number" name="from_phone" />
                </div>
                <div>
                <input className=" w-full rounded-xl h-12 ps-3 bg-teal-900  bg-opacity-60 text-white" placeholder="Doctor Name" type="text" name="dr_name" />
                </div>
                </div>
                <div className="grid md:grid-cols-2 my-4 gap-4">
                <div>
                <input className=" w-full rounded-xl h-12 ps-3 bg-teal-900 bg-opacity-60 text-white" placeholder="Date" type="date" name="from_date" />
                </div>
                <div className="input-group">
                            <select
                              name="schedule"
                              className="select select-bordered w-full rounded-xl h-12 ps-3 bg-teal-900 bg-opacity-60  text-white"
                            >
                              <option disabled selected>
                                Time
                              </option>
                              <option value="7:00 AM">10:00 AM</option>
                              <option value="8:00 AM">11:00 AM</option>
                              <option value="7:00 PM">2:00 PM</option>
                              <option value="8:00 PM">4:00 PM</option>
                            </select>
                          </div>
                </div>
                
                <input className="btn bg-orange-300 border-0 hover:bg-orange-400   w-full mb-8 md:mb-0 text-white font-bold" type="submit"  value="Book Now" />
            </form>
                 </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;