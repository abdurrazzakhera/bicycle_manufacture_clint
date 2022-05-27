import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Goods = ({ product, index }) => {
  const [user, loading, error] = useAuthState(auth);
  const [admin] = useAdmin(user);
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
        <div className='w-24 rounded-xl'>
          <img src={img} alt='' />
        </div>
      </td>
      <td>{name}</td>
      <td>{dec}</td>
      <td>$ {price}</td>
      <td>{quantity}</td>
      <td>{available}</td>
      <td>
        {admin ? (
          <Link
            to='/dashboard/manageproduct'
            className='btn btn-sm btn-primary'
          >
            Manage
          </Link>
        ) : (
          <>
            <button
              onClick={() => handelPurchase(_id)}
              className='btn btn-sm btn-primary'
            >
              Purchase
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default Goods;
