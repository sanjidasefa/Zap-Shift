import React from 'react';
import car from '../../assets/bookingIcon.png'
const HOwWork = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl text-secondary  font-bold ">How it Works</h1>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-10 my-5'>
          <div className='bg-gray-200 rounded-2xl p-5 '>
          <img src={car} alt="" />
          <h1 className='text-xl text-secondary font-bold my-3'>Booking Pick & Drop</h1>
          <p className='text-secondary text-lg '>From personal packages to business shipments — we deliver on time, every time.</p>
        </div>
        <div className='bg-gray-200 rounded-2xl p-5 '>
          <img src={car} alt="" />
          <h1 className='text-xl text-secondary font-bold my-3'>Cash On Delivery</h1>
          <p className='text-secondary text-lg '>From personal packages to business shipments — we deliver on time, every time.</p>
        </div>
        <div className='bg-gray-200 rounded-2xl p-5 '>
          <img src={car} alt="" />
          <h1 className='text-xl text-secondary font-bold my-3'>Delivery Hub</h1>
          <p className='text-secondary text-lg '>From personal packages to business shipments — we deliver on time, every time.</p>
        </div>
        <div className='bg-gray-200 rounded-2xl p-5 '>
          <img src={car} alt="" />
          <h1 className='text-xl text-secondary font-bold my-3'>Booking SME & Corporate</h1>
          <p className='text-secondary text-lg '>From personal packages to business shipments — we deliver on time, every time.</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default HOwWork;