import React, { useEffect, useState } from 'react';

const Users = () => {

    const [users, setusers] = useState([]);

    useEffect(()=>{
        fetch('../../../../public/users.json')
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
        <div>
          

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
                    <td className="sm:text-xl flex"><span className=' font-bold w-[30%] bg-slate-300 flex items-center justify-center -my-2 me-3'>NAME: </span>{user.name}</td>
                    <hr className="font-bold" />
                    <td className="sm:text-xl flex"><span className=' font-bold w-[30%] bg-slate-300 flex items-center justify-center -my-2 me-3'>EMAIL: </span>{user.email}</td>
                    <hr className="font-bold" />
                    <td className="sm:text-xl flex"><span className=' font-bold w-[30%] bg-slate-300 flex items-center justify-center -my-2 me-3'>JOB: </span><p>
                    {
                        user.job == "" ? <p className=""></p> : <p className="bg-emerald-950 text-white w-fit px-5 py-1 rounded">{user.job}</p>
                    }
                    </p>
                    </td>
                    <hr className="font-bold" />
                    <td className="sm:text-xl flex"><span className=' font-bold w-[30%] bg-slate-300 flex items-center justify-center -my-2 me-3'>Remove </span><h1 className=' bg-emerald-950 text-white w-fit px-5 py-1 rounded '>Remove User</h1></td>
                    <hr className="font-bold border-2 border-white" />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


          <div className="hidden md:block">
            <table className="table md:w-full my-2">
              {/* head */}
              <thead>
                <tr className="text-xl md:text-2xl text-black bg-gray-300">
                  <th>NO.</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th className="">JOB</th>
                  <th>Remove</th>
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
                    <td className="md:flex md:items-center md:gap-2">
                      <span className="font-bold md:text-sm">{index+1}.</span>
                    </td>
                    
                    <td className="md:font-semibold">{user.name}</td>
                    <td className="md:font-semibold">{user.email}</td>
                    <td>
                    {
                        user.job == "" ? <p className=""></p> : <p className="bg-emerald-950 text-white w-fit px-5 py-1 rounded">{user.job}</p>
                    }
                    </td>
                      
                    <td><h1 className=' bg-emerald-950 text-white w-fit px-5 py-2 rounded mt-1'>Remove User</h1></td>
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

export default Users;