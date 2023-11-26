import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='md:flex items-center justify-center gap-10'>
                <div>
                    <img className='w-full md:w-[788px]' src="https://i.ibb.co/WBtN4Pg/Screenshot-2023-11-26-215500.png" alt="" />
                </div>
                <div className='rounded-md md:w-[461px] border p-10 shadow-md'>
                    <h1 className='font-bold text-3xl text-green-900 text-center'>Sign Up to Doc House</h1>
                    <br />
                    <div className="">
                <div>
                <p className=' mb-1 mt-3 text-lg font-bold'>Name</p>
                <input className="input input-bordered border-0 w-full bg-zinc-100" placeholder="Enter your Name" type="text" name="from_name" />
                </div>
                <div>
                <p className=' mb-1 mt-3 text-lg font-bold'>Username</p>
                <input className="input input-bordered border-0 w-full bg-zinc-100" placeholder="Enter your username" type="text" name="from_username" />
                </div>
                <div>
                <p className=' mb-1 mt-3 text-lg font-bold'>Email</p>
                <input className="input input-bordered border-0 w-full bg-zinc-100" placeholder="Enter your email" type="text" name="from_email" />
                </div>
                <div>
                <p className=' mb-1 mt-3 text-lg font-bold'>Password</p>
                <input className=" input input-bordered border-0 w-full bg-zinc-100" placeholder="Enter your password" type="text" name="from_subject" />
                <input className="btn bg-orange-300 border-0 hover:bg-orange-400 mt-4  w-full mb-4 text-white font-bold" type="submit"  value="Create Account" />
                <p>Already have an account. Go to <span className='text-orange-300 font-bold'><Link to={'/login'}>SIGN IN</Link></span></p>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Register;