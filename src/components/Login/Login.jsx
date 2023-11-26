import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='md:flex items-center justify-center gap-10'>
                <div>
                    <img className='w-full md:w-[788px]' src="https://i.ibb.co/WBtN4Pg/Screenshot-2023-11-26-215500.png" alt="" />
                </div>
                <div className='rounded-md md:w-[461px] border p-10 shadow-md'>
                    <h1 className='font-bold text-3xl text-green-900 text-center'>Sign In to Doc House</h1>
                    <br />
                    <div className="">
                <div>
                <p className=' mb-1 mt-3 text-lg font-bold'>Username or Email Address</p>
                <input className="input input-bordered border-0 w-full bg-zinc-100" placeholder="Enter your email address" type="text" name="from_email" />
                </div>
                <br />
                <div>
                <div className='flex items-center justify-between'>
                <p className=' mb-1 mt-3 text-lg font-bold'>Password</p>
                <p className='text-orange-300'>Forgot passowrd?</p>
                </div>
                <input className=" input input-bordered border-0 w-full bg-zinc-100" placeholder="Enter your password" type="text" name="from_subject" />
                <input className="btn bg-orange-300 border-0 hover:bg-orange-400 mt-4  w-full mb-4 text-white font-bold" type="submit"  value="Login Now" />
                <p>Please register at first. Go to <span className='text-orange-300 font-bold'><Link to={'/register'}>SIGN UP</Link></span></p>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Login;