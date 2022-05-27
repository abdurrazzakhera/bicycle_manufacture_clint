import React from "react";

const SummaryCart = ({ icon, counter, text }) => {
  return (
    <div className='bg-base-200   shadow-lg p-5 rounded-lg flex flex-col justify-center items-center text-primary '>
      <h1 className='text-5xl mb-5'>{icon}</h1>
      <h1 className='text-5xl text-black mt-3 font-bold bottomBorder '>
        {counter}
      </h1>
      <p className='text-3xl font-semibold'>{text}</p>
    </div>
  );
};

export default SummaryCart;
