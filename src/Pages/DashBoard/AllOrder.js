import React from "react";
import { toast } from "react-toastify";

const AllOrder = ({ index, allorder, refetch }) => {
  console.log(allorder);
  const { _id, customerName, customerEmail, productName, quantity, paid } =
    allorder;
  const handleDeliverd = (product) => {
    console.log(product);
  };
  const handelOrderDelete = (id) => {
    console.log(id);
    const url = `http://localhost:5000/orders/${id}`;
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
      <td>{_id}</td>
      <td>
        {!paid ? (
          <span className='text-red-700 text-lg font-bold'>Not Yet Paid</span>
        ) : (
          <span className='text-primary text-lg font-bold'>Already Paid !</span>
        )}
      </td>
      <td>
        {!paid ? (
          <button
            onClick={() => handelOrderDelete(_id)}
            className='btn bg-red-500 text-white  btn-xs'
          >
            Cancel
          </button>
        ) : (
          <button
            onClick={() => handleDeliverd(allorder)}
            className='btn btn-primary btn-xs'
          >
            Ship
          </button>
        )}
        {/* <button
          onClick={() => handleDeliverd(allorder)}
          className='btn btn-primary btn-xs'
        >
          Ship
        </button> */}
      </td>
    </tr>
  );
};

export default AllOrder;
