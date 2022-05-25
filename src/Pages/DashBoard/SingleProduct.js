import React from "react";

const SingleProduct = ({ product, index }) => {
  //   console.log(product);
  const { _id, img, name, price, available } = product;
  const handelPriduct = (product) => {
    console.log(product._id);
  };

  return (
    <tr>
      <th>{index}</th>
      <td>{img}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{available}</td>
      <td>{_id}</td>
      <td>
        <button
          onClick={() => handelPriduct(product)}
          className='btn bg-red-500 btn-xs text-white font-bold'
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SingleProduct;
