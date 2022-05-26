import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import Myorder from "./Myorder";

const MYOrders = () => {
  const [user, loading, error] = useAuthState(auth);
  const {
    data: myOrders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`http://localhost:5000/orders?customerEmail=${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearar ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (loading || isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1>This is My Order :{myOrders.length}</h1>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>total price</th>
              <th>Payment</th>
              <th>order cancel</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((order, index) => (
              <Myorder
                index={index}
                key={order._id}
                order={order}
                refetch={refetch}
              ></Myorder>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MYOrders;
