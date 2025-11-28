import React from 'react';
import error from '../assets/error.jpg'
import { Link } from 'react-router';
import Navber from '../component/shared/Navber';
import Footer from '../component/shared/Footer';

const Error = () => {
  return (
    <>
    <Navber></Navber>
    <div className='w-11/12 mx-auto my-10'>
    <div className="card bg-base-100 image-full ">
  <figure>
     <img src={error} alt="" className=' h-[700px] w-full' />
  </figure>
  <div className="card-body flex justify-center items-center">
  <div>
      <h2 className="text-4xl mb-4 font-bold text-center">Go To Home</h2>
    <div className="card-actions justify-center">
      <Link to='/' className="btn btn-primary text-secondary">Home</Link>
    </div>
  </div>
  </div>
</div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default Error;