import React from "react";

const Myorder = ({ order, index }) => {
  const { customerName, productName, quantity } = order;
  //   console.log(order);
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{customerName}</td>
      <td>{productName}</td>
      <td>{quantity}</td>
      <td>
        <button className='btn btn-primary btn-xs'>Payment</button>
      </td>
    </tr>
  );
};

export default Myorder;
