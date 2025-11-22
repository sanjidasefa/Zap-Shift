import React, { use } from 'react';
import customer from '../../assets/customer-top.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import comma from '../../assets/reviewQuote.png'

const Reviw = ({loadData}) => {
   const data = use(loadData)
  //  console.log(data)
  return (
    <div>
      <div className='flex justify-center s-center my-4'>
        <img src={customer} alt="" className=''/>
      </div>
<div className='text-center'>
        <h1 className='text-3xl font-bold text-secondary'>What our customers are sayings</h1>
      <p className='text-secondary my-8'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
</div>

      <Swiper
      loop={true}
      slidesPerView={3}
     spaceBetween={14}
      effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
       {
        data.map((review , index) => (
          <SwiperSlide key={index} >
         <div className='bg-primary rounded-2xl px-3 py-5'>
         <img src={comma} alt="" className='b'/>
          <p  className='my-4 font-semibold text-secondary'>
            {review.review}
          </p>
          <div className="divider"></div>
           <h1  className='text-2xl font-bold text-secondary'>{review.userName}</h1>
          <p className='text-secondary text-xs'>{review.user_email}</p>
         </div>
       </SwiperSlide>
       
        ))
       }
      </Swiper>

    </div>
  );
};

export default Reviw;