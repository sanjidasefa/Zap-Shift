import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../component/shared/Navber';
import Footer from '../component/shared/Footer';

const MainLayout = () => {
  return (
    <div>
      <Navber></Navber>
     <div className='bg-gray-100'>
       <Outlet></Outlet>
     </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;