import React from "react";
import { toast } from "react-toastify";

const SingleProduct = ({ product, index, refetch }) => {
  const { _id, img, name, price, available } = product;
  const handelPriduct = (id) => {
    console.log(id);
    const url = `http://localhost:5000/goods/${id}`;
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
      <td>
        <div className='w-24 rounded-xl'>
          <img src={img} alt='' />
        </div>
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{available}</td>
      <td>
        <button
          onClick={() => handelPriduct(_id)}
          className='btn bg-red-500 btn-xs text-white font-bold'
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SingleProduct;
