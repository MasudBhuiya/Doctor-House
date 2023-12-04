import React, { useEffect, useState } from 'react';

const ManageUsers = () => {
    const [users, setusers] = useState([]);

    useEffect(()=>{
        fetch('../../../../../public/manageUser.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setusers(data);
        })

    },[])


    return (
        <div className=" lg:p-10">
            <h1 className='text-3xl font-bold mb-6 mt-6 lg:mt-0'>My Appointments : {users.length}</h1>
      <div className="w-full justify-center">
        <div className=''>
          

          {/* table */}
          <div className="md:hidden">
            <table className="table  table-sm">

              <tbody className="item-center">
                {users.map((user, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? " bg-slate-50 flex flex-col" : " bg-slate-100 flex flex-col"
                    }
                  >
                    <td className="sm:text-xl flex"><span className=' font-bold w-[30%] bg-slate-300 flex items-center justify-center -my-2 me-3'>NO: </span>{index+1}.</td>
                    <hr className="font-bold" />
                    <td className="sm:text-xl flex"><span className=' font-bold w-[30%] bg-slate-300 flex items-center justify-center -my-2 me-3'>EMAIL: </span>{user.email}</td>
                    <hr className="font-bold" />
                    <td className="sm:text-xl flex"><span className=' font-bold w-[30%] bg-slate-300 flex items-center justify-center -my-2 me-3'>NAME: </span>{user.name}</td>
                    <hr className="font-bold" />
                    <td className="sm:text-xl flex"><span className=' font-bold w-[30%] bg-slate-300 flex items-center justify-center -my-2 me-3'>JOB: </span><p>
                    {
                        user.job == "" ? <p className=""></p> : <p className="bg-emerald-950 text-white w-fit px-5 py-1 rounded">{user.job}</p>
                    }
                    </p>
                    </td>
                    <hr className="font-bold" />
                    <td className="sm:text-xl flex"><span className=' font-bold w-[30%] bg-slate-300 flex items-center justify-center -my-2 me-3'>ACTION</span><h1 className=' bg-red-600 text-white w-fit px-5 py-1 rounded '>Delete</h1></td>
                    <hr className="font-bold border-2 border-white" />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


          <div className="hidden md:block shadow-xl">
            <table className="table md:w-full my-2 ">
              {/* head */}
              <thead>
                <tr className="text-xl md:text-2xl text-black bg-gray-300">
                  <th>NO.</th>
                  <th>AVATAR</th>
                  <th>NAME</th>
                  <th className="">SPECIALITY</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody className="item-center">
                {users.map((user, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? " bg-slate-50 text-xl" : " bg-slate-100 text-xl"
                    }
                  >
                      <td className="font-bold md:text-sm">{index+1}.</td>
                    
                    <td className="md:font-semibold"><img className='rounded-full' src={user.image} alt="" /></td>
                    <td className="md:font-semibold">{user.name}</td>
                    <td className="md:font-semibold">{user.speciality}</td>
                      
                    <td><h1 className=' bg-red-600 text-white btn'>Delete</h1></td>
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

export default ManageUsers;