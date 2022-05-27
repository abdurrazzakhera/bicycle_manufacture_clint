import React from "react";

const Review = ({ review }) => {
  const { name, title, dec, ratting } = review;
  return (
    <div className='card w-full bg-base-200 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title text-primary'>
          Name: <span> {title}</span>
        </h2>
        <p>#{dec}</p>
        <div className='flex justify-between'>
          <div>
            <span>Ratting : {ratting} of 5</span>
          </div>
          <div>
            <p>
              @ <span className='  text-primary text-lg'>{name}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
