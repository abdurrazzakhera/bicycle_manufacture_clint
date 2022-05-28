import React from "react";
import { toast } from "react-toastify";

const AllOrder = ({ index, allorder, refetch }) => {
  // console.log(allorder);
  const {
    _id,
    customerName,
    customerEmail,
    productName,
    quantity,
    paid,
    shiped,
  } = allorder;
  const shipedOrder = {
    productName,
    quantity,
  };
  const handleDeliverd = (id) => {
    // console.log(id);
    //update backend in database
    fetch(`https://intense-citadel-48808.herokuapp.com/ordersShiped/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearar ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(shipedOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success("Shipping Starting");
        refetch();
      });
  };
  const handelOrderDelete = (id) => {
    // console.log(id);
    const url = `https://intense-citadel-48808.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Order Delete!!!");
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{customerName}</td>
      <td>{customerEmail}</td>
      <td>{productName}</td>
      <td>{quantity}</td>
      <td>{allorder?.transactionId}</td>
      <td>
        {!paid ? (
          <span className='text-red-700 text-lg font-bold'>Not Yet Paid</span>
        ) : (
          <>
            {!shiped ? (
              <span className='text-primary text-lg font-bold'>
                Already Paid !
              </span>
            ) : (
              <span className='text-green-500 text-lg font-bold'>
                Shiping Start
              </span>
            )}
          </>
        )}
      </td>
      <td>
        {!paid ? (
          <>
            {" "}
            <button
              onClick={() => handelOrderDelete(_id)}
              className='btn bg-red-500 text-white  btn-xs'
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            {!shiped ? (
              <button
                onClick={() => handleDeliverd(_id)}
                className='btn btn-primary btn-xs'
              >
                Ship
              </button>
            ) : (
              <button className='btn bg-green-500 btn-xs ' disabled>
                Already Shiped
              </button>
            )}
          </>
        )}
      </td>
    </tr>
  );
};

export default AllOrder;
