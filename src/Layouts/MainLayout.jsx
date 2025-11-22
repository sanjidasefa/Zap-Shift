import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../component/shared/Navber';
import Footer from '../component/shared/Footer';

const MainLayout = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;