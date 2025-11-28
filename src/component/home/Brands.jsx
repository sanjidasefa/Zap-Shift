import React from 'react';
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay} from 'swiper/modules';
import amazon from '../../assets/brands/amazon.png'
import amazon_vector from '../../assets/brands/amazon_vector.png'
import casio from '../../assets/brands/casio.png'
import moonstar from '../../assets/brands/moonstar.png'
import randstad from '../../assets/brands/randstad.png'
import star from '../../assets/brands/star.png'
import star_people from '../../assets/brands/start_people.png'
import { ImGift } from 'react-icons/im';
import live from '../../assets/live-tracking.png'
import car from '../../assets/delivery-van.png'
import safe from '../../assets/safe-delivery.png'

const brands = [amazon, amazon_vector , casio , moonstar , randstad , star , star_people]
const Brands = () => {
  return (
   <>
    <h1 className="text-3xl text-secondary text-center my-10 font-bold ">We've helped thousands of sales teams</h1>
    <Swiper slidesPerView={4}
        centeredSlides={true}
        spaceBetween={15}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper">
     
      {
      brands.map((brand , index) => <SwiperSlide key={index} className=''><img src={brand} alt="" /></SwiperSlide>)
     }
  
    </Swiper>

    <div className='my-10 lg:my-20'>
      <div className='flex my-5 s-center bg-white rounded-2xl p-5 '>

      <div >
        <img src={live} alt="" className='w-full'/>
      </div>
      <div className='divider divider-horizontal divider-start'></div>
      <div>
        <h1 className='text-xl text-secondary font-bold my-3'>Live Parcel Tracking</h1>
        <p className='text-secondary text-lg '>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
      </div>
    </div>
    <div className='flex bg-gray-200 my-5 rounded-2xl p-5 s-center'>
      <div >
        <img src={car} alt="" className='w-50 md:h-45' />
      </div>
      <div className='divider divider-horizontal divider-start'></div>
      <div>
        <h1 className='text-xl text-secondary font-bold my-3'>100% Safe Delivery</h1>
        <p className='text-secondary text-lg '>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
      </div>
    </div>
    <div className='flex  bg-white rounded-2xl p-5 s-center'>
      <div >
        <img src={safe} alt="" />
      </div>
      <div className='divider divider-horizontal divider-start'></div>
      <div>
        <h1 className='text-xl text-secondary font-bold my-3'>24/7 Call Center Support</h1>
        <p className='text-secondary text-lg '>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
      </div>
    </div>
    </div>
    
   </>
 
  );
};

export default Brands;