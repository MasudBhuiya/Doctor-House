import React from 'react';
import { FaFileAlt, FaUserAlt, FaUsers } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';

const Recharts = () => {
    return (
        <div className='overflow-x-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-5 md:px-12 mt-28'>
                <div className="card w-full bg-emerald-950 text-white shadow-xl">
                    <div className="card-body flex items-center justify-center">
                        <div className='flex gap-8  justify-between'>
                        <div className='text-5xl mt-2'>
                            <FaUserAlt></FaUserAlt>
                        </div>
                        <div>
                            <h2 className="text-6xl font-semibold mb-3">167</h2>
                            <hr />
                            <h2 className="text-2xl mt-3 font-bold ">Doctor</h2>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="card w-full bg-orange-300 text-white shadow-xl">
                    <div className="card-body flex items-center justify-center">
                        <div className='flex gap-8  justify-between'>
                        <div className='text-5xl mt-2'>
                            <FaUsers></FaUsers>
                        </div>
                        <div>
                        <h2 className="text-6xl font-semibold mb-3">983</h2>
                        <hr />
                            <h2 className="text-2xl mt-3 font-bold ">Patients</h2>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-cyan-900 text-white shadow-xl">
                    <div className="card-body flex items-center justify-center">
                        <div className='flex gap-8  justify-between'>
                        <div className='text-5xl mt-2'>
                            <FaFileAlt></FaFileAlt>
                        </div>
                        <div>
                        <h2 className="text-6xl font-semibold mb-3">454</h2>
                        <hr />
                            <h2 className="text-2xl mt-3 font-bold">Appoints</h2>
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Recharts;