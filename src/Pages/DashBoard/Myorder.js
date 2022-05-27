import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Myorder = ({ order, index, refetch }) => {
  const {
    _id,
    customerName,
    productName,
    quantity,
    totalPrice,
    paid,
    transactionId,
  } = order;
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
          toast.success("Product delete success");
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{customerName}</td>
      <td>{productName}</td>
      <td>{quantity}</td>
      <td>$ {totalPrice}</td>
      <td>
        {totalPrice && !paid && (
          <Link to={`/dashboard/payment/${order._id}`}>
            <button className='btn btn-primary btn-xs'>Payment</button>
          </Link>
        )}
        {totalPrice && paid && (
          <div>
            <span className='text-primary'>Paid </span>
            <p>
              T-Id:{" "}
              <span className='text-green-700 text-lg'>{transactionId}</span>
            </p>
          </div>
        )}
      </td>
      <td>
        {!paid ? (
          <button
            onClick={() => handelOrderDelete(_id)}
            className='btn bg-red-500 btn-xs text-white'
          >
            Cancel
          </button>
        ) : (
          <button className='btn btn-primary btn-xs' disabled>
            Cancel
          </button>
        )}
      </td>
    </tr>
  );
};

export default Myorder;
