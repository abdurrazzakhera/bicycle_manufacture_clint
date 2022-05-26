import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Goods = ({ product, index }) => {
  const navigate = useNavigate();
  const { _id, img, name, dec, price, quantity, available } = product;
  const handelPurchase = (id) => {
    navigate(`/orders/${id}`);
    console.log(id);
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class='w-24 rounded-xl'>
          <img src={img} alt='' />
        </div>
      </td>
      <td>{name}</td>
      <td>{dec}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{available}</td>
      <td>
        <button
          onClick={() => handelPurchase(_id)}
          class='btn btn-sm btn-primary'
        >
          Purchase
        </button>
      </td>
    </tr>
  );
};

export default Goods;
