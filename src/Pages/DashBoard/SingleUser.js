import React from "react";
import { toast } from "react-toastify";

const SingleUser = ({ user, index, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearar ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Admin make successfully");
          refetch();
        } else {
          toast.error("You have Not permission make admin");
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role === "admin" ? (
          <button
            disabled
            onClick={makeAdmin}
            className='btn btn-primary btn-xs'
          >
            Make Admin
          </button>
        ) : (
          <button onClick={makeAdmin} className='btn btn-primary btn-xs'>
            Make Admin
          </button>
        )}
        {/* {role !== "admin" && (
          <button onClick={makeAdmin} className='btn btn-primary btn-xs'>
            Make Admin
          </button>
        )} */}
      </td>
      <td>Blue</td>
    </tr>
  );
};

export default SingleUser;
