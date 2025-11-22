import React from 'react';
import { Link } from 'react-router';
import location from '../../assets/location-merchant.png'
const CustomerPriority = () => {
  return (
    <div className='bg-secondary p-15 rounded-2xl bg-[url("/be-a-merchant-bg.png")] bg-cover bg-center '>
     <div className='flex justify-between'>
       <div >
        <h1 className='text-2xl md:text-4xl font-bold text-white '>Merchant and Customer <br /> Satisfaction is Our First Priority</h1>
      <p className='text-gray-400 my-5'>We offer the lowest delivery charge with the highest value along with 100% safety of your <br /> product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
      <div className='flex gap-5'>
        <Link className=" btn rounded-full font-semibold bg-primary">Become a Merchant</Link>
        <Link className='bg-secondary outline-0 
         outline-primary text-primary btn rounded-2xl ml-4 font-semibold  '>Earn with ZapShift Courier</Link>
      </div>
      </div>
      <div className=''>
        <img src={location} alt="" className='' />
      </div>
    </div>
     </div>
  );
};

export default CustomerPriority;