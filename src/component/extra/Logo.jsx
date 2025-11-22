import React from 'react';
import logo from '../../assets/logo.png'

const Logo = () => {
  return (
    <div className='flex'>
     <img src={logo} alt="" /> 
     <h1 className='text-3xl font-bold -ms-2.5 mt-4'>Zap Shift</h1>
    </div>
  );
};

export default Logo;