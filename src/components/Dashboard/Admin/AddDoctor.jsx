import React from 'react';
import { CiImageOn } from "react-icons/ci";
const AddDoctor = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold  mt-3 md:ms-7'>Add a New Doctor</h1>
      <div className='rounded md:w-[540px]  md:m-7 p-9 bg-white'>
        <form action="">
          <div>
            <p className='text-lg font-semibold mt-3'>Name</p>
            <input className=" w-full rounded h-14 ps-3 border " placeholder="Enter Name" type="text" name="from_name" />
          </div>
          <div>
            <p className='text-lg font-semibold mt-3'>Email</p>
            <input className=" w-full rounded h-14 ps-3 border " placeholder="Email Address" type="email" name="from_email" />
          </div>
          <div className="input-group">
            <p className='text-lg font-semibold mt-3'>Speciality</p>
            <select
              name="schedule"
              className="select select-bordered rounded w-full  h-14 ps-3 "
            >
              <option value="7:00 AM">Teeth Orthodontics</option>
              <option value="8:00 AM">Cosmetic Dentisty</option>
              <option value="7:00 PM">Teeth Cleaning</option>
              <option value="8:00 PM">Cavity Protection</option>
              <option value="8:00 PM">Pediatric Dental</option>
              <option value="8:00 PM">Oral Surgery</option>
            </select>
          </div>
          <div className='mt-10 border-2 border-dashed rounded-md text-center py-10'>
            <p className='text-gray-400'>Upload Your Photo</p>
            <p className='flex items-center justify-center text-5xl text-gray-400'><CiImageOn /></p>
          </div>
          <input className="btn bg-emerald-950 border-0 hover:bg-emerald-800 mt-5   w-full mb-8 md:mb-0 text-white font-bold" type="submit" value="Add" />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;