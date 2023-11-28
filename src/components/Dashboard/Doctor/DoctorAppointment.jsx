import React, { useEffect, useState } from 'react';

const DoctorAppointment = () => {
    const [appoint, setAppoints] = useState([]);

    useEffect(()=>{
        fetch('../../../../public/docappoint.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAppoints(data);
        })

    },[])
    return (
        <div className='lg:m-10 card shadow-md'>
            <div className='flex items-center justify-between m-4'>
            <h1 className='text-3xl font-bold'>My Appointment</h1>
            <button className='btn btn-outline'>May 10, 2023</button>
            </div>
            <div className="w-full justify-center">
        <div>
          

          


          <div className="">
            <table className="table md:w-full my-2">
              {/* head */}
              <thead>
                <tr className="text-xl md:text-xl text-black bg-gray-300">
                  <th></th>
                  <th>NAME</th>
                  <th>SERVICE</th>
                  <th className="">TIME</th>
                </tr>
              </thead>
              <tbody className="item-center">
                {appoint.map((user, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? " bg-slate-50 text-lg md:text-xl" : " bg-slate-100 text-lg md:text-xl"
                    }
                  >
                    
                    <td className="md:font-semibold">{index+1}.</td>
                    <td className="md:font-semibold">{user.name}</td>
                    <td className="md:font-semibold">{user.service}</td>
                    <td className="md:font-semibold">{user.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
        </div>
    );
};

export default DoctorAppointment;