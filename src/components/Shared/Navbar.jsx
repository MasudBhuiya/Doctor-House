import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogout = () =>{
      logOut()
      .then()
      .catch(err=> {
        console.log(err.message);
      })
    }
    const navItems = <>
    <li className=' font-bold'><Link to='/'>Home</Link></li>
    <li className=' font-bold'><Link to='/appointment'>Appointment</Link></li>
    <li className=' font-bold'><Link to='/about'>About</Link></li>
    <li className=' font-bold'><a href='/contact'>Contact</a></li>
    <li className=' font-bold'><Link to='/dashboard'>Dashboard</Link></li>
    
    <li>
    {user ? <><p onClick={handleLogout} className="btn btn-link
  "><Link>LOG OUT</Link></p></>: <p className="btn btn-link mr-2
  "><Link to="/login">LOGIN</Link></p>}
    </li>
    {user ? <img className="w-8 h-8 rounded-full" src={user?.photoURL
} alt="" />: <img className="w-8 h-8 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpsSYuMnSziZqiTm7N3_cuyCNbBwkLCxtgN7V6rlV4VaMUje7vpgmUDRJxQiZM7TWI7xM&usqp=CAU" alt="" />}
  </>
    return (
        <div className="navbar max-w-[1440px] mx-auto text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl">
              <img className="h-full w-16 rounded" src='https://images-workbench.99static.com/l20BQsocuxaOUoYnFlWb-1XSOvY=/99designs-contests-attachments/80/80402/attachment_80402256' alt="" />
          </Link>
        </div>
        <div className="navbar-end hidden  lg:items-center lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
      </div>
    );
};

export default Navbar;