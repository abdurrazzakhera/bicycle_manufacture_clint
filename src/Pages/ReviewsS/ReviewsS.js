import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading";
import ReviewS from "./ReviewS";
import "./ReviewsS.css";

const ReviewsS = () => {
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch("https://intense-citadel-48808.herokuapp.com/review").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  // console.log(reviews);
  return (
    <div className='lg:container mx-auto mb-10'>
      <h1 className='lg:text-6xl  text-3xl text-primary uppercase font-bold text-center titleAfter'>
        Our Happy Customer Reviews
      </h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 p-3  '>
        {reviews.map((review, index) => (
          <ReviewS key={index} review={review}></ReviewS>
        ))}
      </div>
    </div>
  );
};

export default ReviewsS;
