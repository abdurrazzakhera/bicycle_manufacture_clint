import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import AllOrder from "./AllOrder";

const AllOrders = () => {
  // const [allOrders, setAllOrders] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   fetch("http://localhost:5000/orderadmin", {
  //     method: "GET",
  //     headers: {
  //       authorization: `Bearar ${localStorage.getItem("accessToken")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAllOrders(data);
  //       setIsLoading(false);
  //     });
  // }, []);
  const {
    data: allOrders,
    isLoading,
    refetch,
  } = useQuery("allOrders", () =>
    fetch("http://localhost:5000/orderadmin", {
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
      <h1 className='text-3xl text-red-500'>
        Total order for Admin :{allOrders.length}
      </h1>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>id</th>
              <th>Payment Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((allorder, index) => (
              <AllOrder
                index={index}
                key={allorder._id}
                allorder={allorder}
                refetch={refetch}
              ></AllOrder>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrders;
