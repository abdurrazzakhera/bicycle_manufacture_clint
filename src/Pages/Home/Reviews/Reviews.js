import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading";
import Review from "./Review";
import "./Reviews.css";

const Reviews = () => {
  // const [reviews, setReviews] = useState([]);
  // useEffect(() => {
  //   fetch("revies.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setReviews(data);
  //     });
  // }, []);
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
        {reviews
          .map((review, index) => <Review key={index} review={review}></Review>)
          .slice(0, 6)}
      </div>
      <div className='mt-5'>
        <p className='text-center'>
          <Link
            to='/reviewsS'
            className='btn btn-outline border-primary border-2  hover:btn-primary'
          >
            See All Reviews
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Reviews;
