import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bannar1 from "../../assets/banner/banner1.png";
import bannar2 from "../../assets/banner/banner2.png";
import bannar3 from "../../assets/banner/banner3.png";
import { Link } from "react-router";
import { FaLocationArrow } from "react-icons/fa6";
const Benner = () => {
  return (
    <>
      <Carousel autoPlay={true} infiniteLoop={true} interval={5000}>
        <div className="relative ">
          <img src={bannar1} className="" />
          <div className="absolute bottom-7 left-10 lg:bottom-30 lg:left-20  flex">
            <Link className=" btn rounded-full font-semibold bg-primary">
              Track Your Parcel
            </Link>
            <FaLocationArrow className="text-primery mr-3 w-10 h-10" />
            <Link className="bg-secondary outline-0 
         outline-primary text-primary btn rounded-2xl font-semibold ">Be A Rider</Link>
          </div>
        </div>
        <div lassName="relative">
          <img src={bannar2} />
          <div className="absolute bottom-7 left-10 lg:bottom-30 lg:left-20  flex">
            <Link className=" btn rounded-full font-semibold bg-primary">
              Track Your Parcel
            </Link>
            <FaLocationArrow className="text-primery  w-10 h-10" />
            <Link className="bg-secondary outline-0 
         outline-primary text-primary btn rounded-2xl font-semibold ">Be A Rider</Link>
          </div>
        </div>
        <div lassName="relative">
          <img src={bannar3} />
          <div className="absolute bottom-7 left-10  lg:bottom-30 lg:left-20  flex">
            <Link className=" btn rounded-full font-semibold bg-primary">
              Track Your Parcel
            </Link>
            <FaLocationArrow className="text-primery mr-3  w-10 h-10" />
            <Link className=" bg-secondary outline-0 
         outline-primary text-primary btn rounded-2xl font-semibold ">Be A Rider</Link>
          </div>
        </div>
      </Carousel>

      
    </>
  );
};

export default Benner;
