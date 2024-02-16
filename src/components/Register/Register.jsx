import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin';

const Register = () => {
    const {signUp} = useContext(AuthContext);
    const [error, setError] = useState(null);
    
    const navigate = useNavigate();
    const location = useLocation();


    const handleRegister = e => {
       e.preventDefault();
       const form = e.target;
       const email = form.email.value;
       const password = form.password.value;
       console.log(email, password);
      const from = location.state?.from?.pathname || '/';
    setError('');
      signUp(email, password)
      .then(() => {
        Swal.fire({
          title: 'User Created Successfully.',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        navigate(from, {replace: true})
      })
      .catch(error => {
        setError(error.message)
      })
      };
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
                <form onSubmit={handleRegister} action="">
                <div>
                <p className=' mb-1 mt-3 text-lg font-bold'>Name</p>
                <input className="input input-bordered border-0 w-full bg-zinc-100" placeholder="Enter your Name" type="text" name="name" />
                </div>
                <div>
                <p className=' mb-1 mt-3 text-lg font-bold'>Username</p>
                <input className="input input-bordered border-0 w-full bg-zinc-100" placeholder="Enter your username" type="text" name="username" />
                </div>
                <div>
                <p className=' mb-1 mt-3 text-lg font-bold'>Email</p>
                <input className="input input-bordered border-0 w-full bg-zinc-100" placeholder="Enter your email" type="text" name="email" />
                </div>
                <div>
                <p className=' mb-1 mt-3 text-lg font-bold'>Password</p>
                <input className=" input input-bordered border-0 w-full bg-zinc-100" placeholder="Enter your password" type="text" name="password" />
                <input className="btn bg-orange-300 border-0 hover:bg-orange-400 mt-4  w-full mb-4 text-white font-bold" type="submit"  value="Create Account" />
                </div>
                </form>
                <p className='text-red-500 my-4'>{error}</p>
                <p>Already have an account. Go to <span className='text-orange-300 font-bold'><Link to={'/login'}>SIGN IN</Link></span></p>
                <SocialLogin></SocialLogin>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Register;