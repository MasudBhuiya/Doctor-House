import React from 'react';
import { FiPhoneOutgoing } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import './ContactUs.css'
const ContactUs = () => {
    return (
        <div>
          <div className='img   h-[350px] -mt-28'>
                <div className='max-w-[1440px] mx-auto px-5'>
                <h1 className='pt-48 text-white'>Home/Contact</h1>
                <h1 className='text-white text-4xl font-bold'>Contact Us</h1>
                </div>
            </div>
          <div id='contact' className='p-6 md:p-20  rounded-md my-20 e max-w-[1400px] mx-auto'>
            <div className='md:flex items-start justify-around shadow-2xl p-8 rounded-xl gap-6'>
                <div className='flex flex-col md:w-[40%]  justify-center'>
                    <h1 className='font-bold text-2xl mb-3'>EMERGENCY CASES</h1>
                    <p className='text-sm mt-6'>Call Now:</p>
                    <p className='flex items-center text-4xl text-green-900 font-bold mt-3 mb-4'><FiPhoneOutgoing /> <p className='ms-4'>+88 01855223656</p></p>
                    <div className='flex items-start mt-8'><p className='text-xl font-bold w-[35%]'>Address 1:</p> <p className='w-[60%]'>789 Tranquil Haven Crescent, Serenity Meadows, Blissful County, USA</p></div>
                    <div className='flex items-start mt-8'><p className='text-xl font-bold w-[35%]'>Address 2:</p> <p className='w-[60%]'>456 Whispering Pines Lane, Harmony Grove, Tranquility Township, USA</p></div>
                    <div className='flex items-start mt-8'><p className='text-xl font-bold w-[35%]'>Working Time:</p> <p className='w-[60%]'>Mon - Sat / 07.00 - 17.00 <br /> Sunday / 08.00 - 11.00</p></div>
                    <div className='flex items-start mt-8'><p className='text-xl font-bold w-[35%]'>Email:</p> <p className='w-[60%]'>ESupport@medical.com</p></div>
                </div>
                <div className='md:w-[60%]'>
                  <h1 className='text-2xl font-bold'>REQUEST APPOINTMENT</h1>
                <div className="">
                 <form  >
                <div className="grid md:grid-cols-2 my-4 gap-4">
                <div>
                <input className=" w-full rounded-xl h-12 ps-3 border  " placeholder="Name" type="text" name="from_name" />
                </div>
                <div>
                <input className=" w-full rounded-xl h-12 ps-3 border  " placeholder="Email" type="email" name="from_email" />
                </div>
                </div>
                <div className="grid md:grid-cols-2 my-4 gap-4">
                <div>
                <input className=" w-full rounded-xl h-12 ps-3 border mt-2 " placeholder="Mobile Number" type="number" name="from_phone" />
                </div>
                <div>
                <input className=" w-full rounded-xl h-12 ps-3 border mt-2 " placeholder="Doctor Name" type="text" name="dr_name" />
                </div>
                </div>
                <div className="grid md:grid-cols-2 my-4 gap-4">
                <div>
                <input className=" w-full rounded-xl h-12 ps-3 border mt-2 " placeholder="Date" type="date" name="from_date" />
                </div>
                <div className="input-group">
                            <select
                              name="schedule"
                              className="select select-bordered w-full rounded-xl h-12 ps-3 border mt-2 "
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
                <textarea name="" id="" className='border w-full rounded-lg mt-2 mb-4 p-3' placeholder='message' cols="30" rows="6"></textarea>
                <input className="btn bg-orange-300 border-0 hover:bg-orange-400  w-full mb-8 md:mb-0 text-white font-bold" type="submit"  value="Book Now" />
            </form>
                 </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ContactUs;