import React from "react";

const Goods = ({ product, index }) => {
  const { _id, img, name, dec, price, quantity, available } = product;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{img}</td>
      <td>{name}</td>
      <td>{dec}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{available}</td>
      <td>
        <button class='btn btn-sm btn-primary'>Purchase</button>
      </td>
    </tr>
  );
};

export default Goods;
