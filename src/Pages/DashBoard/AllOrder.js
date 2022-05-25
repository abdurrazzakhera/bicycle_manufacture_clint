import React from "react";

const AllOrder = ({ index, allorder }) => {
  console.log(allorder);
  const { _id, customerName, customerEmail, productName, quantity } = allorder;
  const handleDeliverd = (product) => {
    console.log(product);
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
        <button
          onClick={() => handleDeliverd(allorder)}
          className='btn btn-primary btn-xs'
        >
          Deliverd
        </button>
      </td>
    </tr>
  );
};

export default AllOrder;
