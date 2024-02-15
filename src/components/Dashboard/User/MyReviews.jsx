import React from 'react';

const MyReviews = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-4xl mb-6'>Our Expert Doctors</h1>
            <p className='w-[80%] mx-auto text-center text-sm mb-10'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-6'>

                <div className="card w-96 lg:w-80 xl:w-96 bg-base-100 shadow-xl border">
                    <figure className="px-8 pt-8"><img  className='rounded-xl' src="https://i.ibb.co/8xJ5s0k/Screenshot-2023-11-24-234701.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Karyen Anderson</h2>
                        <p>BTP -  Senior Physiotherapist</p>
                        <div className='flex text-2xl text-orange-400 my-3'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                        <hr />
                        <p className='flex items-center mt-6'><span className='text-xl me-3'><SlLocationPin /></span> Dhanmondi, Dhaka, Bangladesh</p>
                        <p className='flex items-center '><span className='text-xl me-3'><IoCalendarClearOutline /></span> Available On Mon, 22 December</p>
                        <p className='flex items-center '><span className='text-xl me-3'><RiMoneyDollarCircleLine /></span> $15</p>
                        <div className="card-actions justify-end">
                            <Link to={"/doctor-profile"} className="btn btn-outline btn-block text-orange-300 hover:bg-orange-100 hover:border-orange-300">View Profile</Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 lg:w-80 xl:w-96 bg-base-100 shadow-xl border">
                    <figure className="px-8 pt-8"><img  className='rounded-xl' src="https://i.ibb.co/jVx2rK4/Screenshot-2023-11-24-234730.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Afridi Khan</h2>
                        <p>BTP -  Senior Physiotherapist</p>
                        <div className='flex text-2xl text-orange-400 my-3'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                        <hr />
                        <p className='flex items-center mt-6'><span className='text-xl me-3'><SlLocationPin /></span> Dhanmondi, Dhaka, Bangladesh</p>
                        <p className='flex items-center '><span className='text-xl me-3'><IoCalendarClearOutline /></span> Available On Mon, 22 December</p>
                        <p className='flex items-center '><span className='text-xl me-3'><RiMoneyDollarCircleLine /></span> $15</p>
                        <div className="card-actions justify-end">
                            <Link to={"/doctor-profile"} className="btn bg-orange-300 text-white btn-block hover:bg-orange-400 hover:border-orange-300">View Profile</Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 lg:w-80 xl:w-96 bg-base-100 shadow-xl border">
                    <figure className="px-8 pt-8"><img  className='rounded-xl' src="https://i.ibb.co/4fGmCss/Screenshot-2023-11-24-234757.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Alina Sarlan</h2>
                        <p>BTP -  Senior Physiotherapist</p>
                        <div className='flex text-2xl text-orange-400 my-3'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                        <hr />
                        <p className='flex items-center mt-6'><span className='text-xl me-3'><SlLocationPin /></span> Dhanmondi, Dhaka, Bangladesh</p>
                        <p className='flex items-center '><span className='text-xl me-3'><IoCalendarClearOutline /></span> Available On Mon, 22 December</p>
                        <p className='flex items-center '><span className='text-xl me-3'><RiMoneyDollarCircleLine /></span> $15</p>
                        <div className="card-actions justify-end">
                            <Link to={"/doctor-profile"} className="btn btn-outline btn-block text-orange-300 hover:bg-orange-100 hover:border-orange-300">View Profile</Link>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default MyReviews;