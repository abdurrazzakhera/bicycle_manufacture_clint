import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L31csBwzElALFby2o8URPuv74hTfXK8lesHMBgHyMROrRHBGJAmJUT2QXPJvk6Coc1oZIiObEsNGYKuWMdvCknV0072iqkylE"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/orders/${id}`;
  const { data: order, isLoading } = useQuery(["orders", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearar ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className='card w-50 max-w-md bg-base-200 shadow-xl '>
        <div className='card-body '>
          <p className='text-lg font-bold text-blue-500'>
            Hello {order.customerName}
          </p>
          <h2 className='card-title'>Pay for : {order.productName}</h2>
          <p>
            Your Order Quentity is
            <span className='text-green-600 text-lg'>
              {" "}
              {order.quantity}
            </span>{" "}
            and Unit Price {order.quantity}
          </p>
          <p>Pay For : $ {order.totalPrice}</p>
        </div>
      </div>
      <div className='card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-200 my-10'>
        <div className='card-body'>
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
