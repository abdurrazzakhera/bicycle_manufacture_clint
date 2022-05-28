import {
  faBagShopping,
  faHeadphonesSimple,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CustomerServices = () => {
  return (
    <div className='lg:container  mx-auto mb-8'>
      <h1 className='lg:text-5xl  text-3xl text-primary uppercase font-bold text-center mb-5 '>
        Our Facility
      </h1>
      <div className='grid lg:grid-cols-3 grid-cols-1 justify-items-center text-center gap-5'>
        <div className='bg-base-200 p-5 w-8/12 shadow-lg rounded-lg'>
          <span className='text-3xl text-primary '>
            <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
          </span>
          <p className='text-2xl font-semibold'>Big Facility</p>
          <p>Explore needed Product at once</p>
        </div>
        <div className='bg-base-200 p-5 w-8/12 shadow-lg rounded-lg'>
          <span className='text-3xl text-primary '>
            <FontAwesomeIcon icon={faHeadphonesSimple}></FontAwesomeIcon>
          </span>
          <p className='text-2xl font-semibold'>24/7 Support</p>
          <p>Instant Support Everytime</p>
        </div>
        <div className='bg-base-200 p-5 w-8/12 shadow-lg rounded-lg'>
          <span className='text-3xl text-primary '>
            <FontAwesomeIcon icon={faTruck}></FontAwesomeIcon>
          </span>
          <p className='text-2xl font-semibold'>Free Delivery</p>
          <p>On over The $3500</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerServices;
