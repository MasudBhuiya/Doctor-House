
import { useContext, useEffect, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Dashboard = () => {
  const [roles, setRoles] = useState([])
  const [role, setRole] = useState({})
  // console.log(role);
  const {user} = useContext(AuthContext);
  useEffect(()=>{
    fetch(`https://doctor-house-server-two.vercel.app/roleusers?email=${user?.email}`)
    .then(res => res.json())
    .then(data => {
      setRoles(data)
    })
  },[])

  useEffect(()=>{
    roles.map(role => setRole(role))
  },[roles])


  return (
    <div className='bg-slate-200'>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        {/* <div className="drawer-content flex flex-col items-center justify-center"> */}
        <div className="drawer-content ">
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu bg-white shadow-lg p-4 w-80 h-full  text-xl font-bold">


            {
              role.role === 'admin' && <>
                {/* Sidebar content here */}
                <li><NavLink to="/dashboard/allusers">All Users</NavLink></li>
                <li><NavLink to="/dashboard/adddoctor">Add a Doctor</NavLink></li>
                <li><NavLink to="/dashboard/managedoctor">Manage Doctor</NavLink></li>
                <li><NavLink to="/">Home</NavLink></li>
              </>
            }
            {
              role.role === 'doctor' && <>
                {/* Sidebar content here */}
                <li><NavLink to="/dashboard/doctorappointments"> My Appointments</NavLink></li>
              </>
            }
            {
              role.role === 'user' && <>
                {/* Sidebar content here */}
                <li><NavLink to="/dashboard/myappointments">My Appointments</NavLink></li>
                <li><NavLink to="/dashboard/myclasses"> My Reviews</NavLink></li>
                <li><NavLink to="/dashboard/enrolled"> My History</NavLink></li>
                <li><NavLink to="/"> Home</NavLink></li>
              </>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;