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
  const { displayName, email } = user;
  const navigate = useNavigate();
  let miniumInfo;
  if (loading) {
    return <Loading></Loading>;
  }
  const handelIncrease = () => {
    const previousQuantity = parseInt(increase);
    const currentQunatity = parseInt(previousQuantity) + 100;
    setIncrease(currentQunatity);
  };
  const handelDecrease = () => {
    if (increase > 100) {
      const previousQuantity = parseInt(increase);
      const currentQunatity = parseInt(previousQuantity) - 100;
      setIncrease(currentQunatity);
    } else {
      return (miniumInfo = <p>Minium quantity need to order</p>);
    }
  };
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
    console.log(orderDetail);

    // fetch the backend
    fetch("http://localhost:5000/orders", {
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
        // navigate("/");
        toast.success("oreder success");
      });
  };
  return (
    <div className='mb-10 flex justify-center items-center'>
      <div className='grid grid-cols-1 w-96  border-2 p-5'>
        <h1 className='text-5xl text-red-500'>{product.name}</h1>
        <div className='grid grid-cols-2 gap-8'>
          <button onClick={handelIncrease} className='btn btn-primary'>
            Plus
          </button>
          <button onClick={handelDecrease} className='btn btn-primary'>
            Decrease
          </button>
        </div>
        <form
          onSubmit={handleOrder}
          className='grid grid-cols-1 gap-y-5 justify-items-center'
        >
          <input
            type='text'
            name='quantity'
            value={increase}
            className='input input-bordered w-full max-w-xs'
          />
          <input
            type='text'
            value={product.name}
            className='input input-bordered w-full max-w-xs'
          />

          <input
            type='text'
            value={displayName}
            className='input input-bordered w-full max-w-xs'
          />
          <input
            type='text'
            value={email}
            className='input input-bordered w-full max-w-xs'
          />
          <input
            type='number'
            name='phone'
            placeholder='Give your contact number'
            className='input input-bordered w-full max-w-xs'
          />
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
