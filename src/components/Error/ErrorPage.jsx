// import React from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
        const navigate = useNavigate()
        const handleGoBack =()=>{
            navigate('/')
        }
        const {error, status} = useRouteError();
        // console.log(error?.message, status)
    return (
        <div className='flex items-center my-12 justify-center text-center'>
            
            <div>
                <h1 className='text-4xl font-bold'>Sorry,</h1>
            <h1 className='text-3xl '>This page is not found</h1>
            <div className='flex items-center justify-center'>
            <img className='md:h-[347px]  my-16' src="https://i.ibb.co/Rgskw6X/Screenshot-2023-11-26-224505.png" alt="" />
            </div>
            <h1 className='text-2xl font-bold'>{error?.message}</h1>
            <Link><button className='bg-orange-300 p-2 rounded px-16 text-white font-medium mt-8' onClick={handleGoBack}>Back to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;