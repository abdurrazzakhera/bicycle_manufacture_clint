import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useProductDetails from "../../hooks/useProductDetails";
import Loading from "../Shared/Loading";

const Orders = () => {
  const [user, loading, error] = useAuthState(auth);

  const { productId } = useParams();
  const [product] = useProductDetails(productId);
  const [increase, setIncrease] = useState(100);
  const [totalCost, setTotalCost] = useState("");
  const [warrning, setWarning] = useState();
  const { displayName, email } = user;
  const navigate = useNavigate();
  let miniumInfo;
  if (loading) {
    return <Loading></Loading>;
  }
  const handelIncrease = () => {
    const previousQuantity = parseInt(increase);
    const currentQunatity = parseInt(previousQuantity) + 100;
    if (increase < product.available) {
      setIncrease(currentQunatity);
      setWarning(" ");
    } else {
      setWarning("Order Quantity Over Available Quantity ");
    }
    setTotalCost(currentQunatity * product.price);
  };
  const handelDecrease = () => {
    const previousQuantity = parseInt(increase);
    const currentQunatity = parseInt(previousQuantity) - 100;
    if (increase > 100) {
      setIncrease(currentQunatity);
      setWarning(" ");
    } else {
      setWarning("Minimum lots For Oeder");
    }
    setTotalCost(currentQunatity * product.price);
  };
  // console.log(totalCost);
  const handleOrder = (event) => {
    event.preventDefault();
    const quantity = event.target.quantity.value;
    const phone = event.target.phone.value;
    const orderDetail = {
      productName: product.name,
      quantity: quantity,
      totalPrice: product.price * quantity,
      customerName: displayName,
      customerEmail: email,
      customerPhone: phone,
    };
    // console.log(orderDetail);

    // fetch the backend
    fetch("https://intense-citadel-48808.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        event.target.reset();
        navigate("/dashboard/myorders");
        toast.success("oreder success");
      });
  };
  return (
    <div className='mb-10 flex justify-center items-center'>
      <div className='grid grid-cols-1 w-96  border-2 p-5'>
        <h1 className='text-5xl text-primary font-semibold text-center'>
          {product.name}
        </h1>
        <div className='grid grid-cols-2 gap-8 my-5'>
          <button onClick={handelIncrease} className='btn btn-primary btn-xs'>
            +
          </button>
          <button onClick={handelDecrease} className='btn btn-primary btn-xs'>
            -
          </button>
        </div>
        <form
          onSubmit={handleOrder}
          className='grid grid-cols-1 gap-y-5 justify-items-center'
        >
          <div class=' w-full flex flex-col gap-y-2 mx-auto'>
            <label for='Name'>Order Quantity</label>
            <input
              type='text'
              name='quantity'
              value={increase}
              className='input px-4 py-2 border border-gray-300 outline-none focus:border-gray-400 w-full max-w-xs'
            />
          </div>
          <p className='text-red-500 font-serif font-semibold text-xs'>
            {warrning}
          </p>
          <div class=' w-full flex flex-col gap-y-2 mx-auto'>
            <label for='Name'>Product Name</label>
            <input
              type='text'
              value={product.name}
              className='input px-4 py-2 border border-gray-300 outline-none focus:border-gray-400 w-full max-w-xs'
            />
          </div>
          {/* <input
            type='text'
            value={product.name}
            className='input input-bordered w-full max-w-xs'
          /> */}
          <div class=' w-full flex flex-col gap-y-2 mx-auto'>
            <label for='Name'>Total Order Cost :</label>
            <input
              type='text'
              value={totalCost}
              className='input px-4 py-2 border border-gray-300 outline-none focus:border-gray-400 w-full max-w-xs'
            />
          </div>
          {/* <input
            type='text'
            value={totalCost}
            className='input input-bordered w-full max-w-xs'
          /> */}
          <div class=' w-full flex flex-col gap-y-2 mx-auto'>
            <label for='Name'>Your Name :</label>
            <input
              type='text'
              value={displayName}
              className='input px-4 py-2 border border-gray-300 outline-none focus:border-gray-400 w-full max-w-xs'
            />
          </div>
          {/* <input
            type='text'
            value={displayName}
            className='input input-bordered w-full max-w-xs'
          /> */}
          <div class=' w-full flex flex-col gap-y-2 mx-auto'>
            <label for='Name'>Your Email :</label>
            <input
              type='text'
              value={email}
              className='input px-4 py-2 border border-gray-300 outline-none focus:border-gray-400 w-full max-w-xs'
            />
          </div>
          {/* <input
            type='text'
            value={email}
            className='input input-bordered w-full max-w-xs'
          /> */}
          <div class=' w-full flex flex-col gap-y-2 mx-auto'>
            <label for='Name'>Give Youe contact Number :</label>
            <input
              type='text'
              name='phone'
              placeholder='Give your contact number'
              className='input px-4 py-2 border border-gray-300 outline-none focus:border-gray-400 w-full max-w-xs'
            />
          </div>
          {/* <input
            type='number'
            name='phone'
            placeholder='Give your contact number'
            className='input input-bordered w-full max-w-xs'
          /> */}
          <input
            type='submit'
            value='Place Order'
            className='input btn-primary input-bordered w-full max-w-xs'
          />
        </form>
      </div>
    </div>
  );
};

export default Orders;
