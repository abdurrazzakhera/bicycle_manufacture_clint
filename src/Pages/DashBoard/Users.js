import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import SingleUser from "./SingleUser";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://intense-citadel-48808.herokuapp.com/users", {
      method: "GET",
      headers: {
        authorization: `Bearar ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className='text-5xl text-primary text-center mb-5'>
        Hello This page from all user:{users.length}
      </h1>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Action</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <SingleUser
                index={index}
                key={user._id}
                user={user}
                refetch={refetch}
              ></SingleUser>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
