import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Myorder from "./Myorder";

const MYOrders = () => {
  const [user, loading, error] = useAuthState(auth);
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/orders?customerEmail=${user.email}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMyOrders(data);
        });
    }
  }, [user]);

  return (
    <div>
      <h1>This is My Order :{myOrders.length}</h1>
      <div class='overflow-x-auto'>
        <table class='table w-full'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((order, index) => (
              <Myorder index={index} key={order._id} order={order}></Myorder>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MYOrders;
