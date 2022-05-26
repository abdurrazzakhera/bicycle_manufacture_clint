import React from "react";
import { Link } from "react-router-dom";

const Myorder = ({ order, index }) => {
  const { customerName, productName, quantity, totalPrice, paid } = order;
  console.log(order._id);
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
        {totalPrice && paid && <span className='text-primary'>Paid </span>}
      </td>
    </tr>
  );
};

export default Myorder;
