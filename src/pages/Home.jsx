import React from 'react';
import Benner from '../component/home/Benner';
import HOwWork from '../component/home/HOwWork';
import Brands from '../component/home/Brands';
import CustomerPriority from '../component/home/CustomerPriority';
import Reviw from '../component/home/Reviw';
import Question from '../component/home/Question';

const loadData = 
  fetch('/reviews.json')
  .then(res=> res.json())

const Home = () => {
  return (
    <div>
    
      
    <div className='my-5'>
        <Benner></Benner>
    </div>
    <div className='w-11/12 mx-auto my-20'>
      <HOwWork></HOwWork>
    </div>
    <div className='w-11/12 mx-auto my-20'>
      <Brands></Brands>
    </div>
    <div className='w-11/12 mx-auto my-20'>
     <CustomerPriority></CustomerPriority>
    </div>
    <div className='w-11/12 mx-auto my-20'>
    <Reviw loadData={loadData}></Reviw>
    </div>
    <div className='w-11/12 mx-auto my-20'>
    <Question></Question>
    </div>
    </div>
  );
};

export default Home;