import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { success } from "daisyui/src/colors";

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [transectionId, setTransectionId] = useState("");

  const { _id, totalPrice, customerName, customerEmail, productName } = order;

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearar ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ totalPrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [totalPrice, setClientSecret]);
  // credit card function
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    //get card information element
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    //
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    //error message
    setCardError(error?.message || "");
    setPaymentSuccess("");
    setLoading(true);
    //Confire card payment
    const { paymentIntent, intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: customerName,
            email: customerEmail,
          },
        },
      }
    );

    //intent error
    if (intentError) {
      setCardError(intentError?.message);
      setLoading(false);
    } else {
      setCardError("");
      console.log(paymentIntent);
      setTransectionId(paymentIntent.id);
      setPaymentSuccess(" Congratse !!! Payment completed");
      //
      // Store payment on database
      const payment = {
        orderId: _id,
        productName: productName,
        transectionId: paymentIntent.id,
      };
      //
      //
      //update backend in database
      fetch(`http://localhost:5000/orders/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearar ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          console.log(data);
        });
    }

    //end of handle payment function
  };

  //
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className='btn btn-primary btn-xs mt-5'
          type='submit'
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className='text-red-600'>{cardError}!!!</p>}
      {paymentSuccess && (
        <div className='text-green-500'>
          <p>{paymentSuccess}</p>
          <p>
            Transection Id :{" "}
            <span className='text-lg text-black'> {transectionId}</span>{" "}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
