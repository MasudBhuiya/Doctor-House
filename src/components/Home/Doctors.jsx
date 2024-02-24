import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { SlLocationPin } from "react-icons/sl"
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoCalendarClearOutline } from "react-icons/io5";
import { Link, json } from 'react-router-dom';
const Doctors = ({doctor}) => {
    // console.log(doctor);

    const handledb = () =>{
        const hello = 'hello';
        fetch('https://doctor-house-server-two.vercel.app/doctors',{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: json.stringify(hello)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (

                <div className="card w-full bg-base-100 shadow-xl border">
                    <figure className="px-8 pt-8"><img  className='rounded-xl h-[300px] ' src={doctor?.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{doctor?.name}</h2>
                        <p>BTP -  Senior Physiotherapist</p>
                        <div className='flex text-2xl text-orange-400 my-3'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                        <hr />
                        <p className='flex items-center mt-6'><span className='text-xl me-3'><SlLocationPin /></span> Dhanmondi, Dhaka, Bangladesh</p>
                        <p className='flex items-center '><span className='text-xl me-3'><IoCalendarClearOutline /></span> Available On Mon, 22 December</p>
                        <p className='flex items-center '><span className='text-xl me-3'><RiMoneyDollarCircleLine /></span> $15</p>
                        <div className="card-actions justify-end">
                            <Link to={`/doctor-profile/${doctor?._id}`} onClick={handledb} className="btn btn-outline btn-block text-orange-300 hover:bg-orange-500 hover:border-orange-300">View Profile</Link>
                        </div>
                    </div>
                </div>
    );
};

export default Doctors;