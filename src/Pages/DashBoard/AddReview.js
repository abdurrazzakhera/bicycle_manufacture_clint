import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Goods from "../Home/Goods";
import Loading from "../Shared/Loading";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const { data: goods, isLoading } = useQuery("goods", () =>
    fetch("http://localhost:5000/goods").then((res) => res.json())
  );
  const navigate = useNavigate();
  if (isLoading) {
    return <Loading></Loading>;
  }
  const handelReview = (event) => {
    event.preventDefault();
    const product = event.target.product.value;
    const dec = event.target.dec.value;
    const ratting = event.target.ratting.value;
    console.log(product);
    const reviewOjt = {
      name: user.displayName,
      email: user.email,
      reviewProduct: product,
      dec: dec,
      ratting: ratting,
    };
    console.log(reviewOjt);
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearar ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(reviewOjt),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Review Added SuccessFully");
          event.target.reset();
          navigate("/");
          return <Loading></Loading>;
        }
      });
  };
  return (
    <div className='grid grid-cols-1 w-4/12  border-2 p-5 mx-auto'>
      <h1>This is a review page:{goods.length} </h1>
      <form
        onSubmit={handelReview}
        className='grid grid-cols-1 gap-y-5 justify-items-center'
      >
        <div className=' w-full flex flex-col gap-y-2 mx-auto'>
          <label htmlFor='Name'>Product Name</label>
          <select
            name='product'
            className='select select-bordered select-md w-full max-w-xs'
          >
            {goods.map((good, index) => (
              <option key={index} value={good.name}>
                {good.name}
              </option>
            ))}
          </select>
        </div>
        <div className=' w-full flex flex-col gap-y-2 mx-auto'>
          <label htmlFor='Name'>Total Order Cost :</label>
          <textarea
            name='dec'
            id=''
            cols='30'
            rows='10'
            className='input px-4 py-2 border border-gray-300 outline-none focus:border-gray-400 w-full max-w-xs'
          ></textarea>
        </div>
        <div className=' w-full flex flex-col gap-y-2 mx-auto'>
          <label htmlFor='Name'>Your Rating !!!</label>
          <select
            name='ratting'
            className='select select-bordered select-sm w-full max-w-xs'
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        {/* <div className=' w-full flex flex-col gap-y-2 mx-auto'>
          <label for='Name'>Your Email :</label>
          <input
            type='text'
            value={""}
            className='input px-4 py-2 border border-gray-300 outline-none focus:border-gray-400 w-full max-w-xs'
          />
        </div> */}

        <input
          type='submit'
          value='Add Your Review'
          className='input btn-outline hover:btn-primary input-bordered w-full max-w-xs text-lg font-bold'
        />
      </form>
    </div>
  );
};

export default AddReview;
