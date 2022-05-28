import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const { data: adminUser, isLoading } = useQuery("admin", () =>
    fetch(
      `https://intense-citadel-48808.herokuapp.com/adminrole?email=${user.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearar ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(adminUser);
  return (
    <div>
      <div className='w-7/12 mx-auto grid lg:grid-cols-1 gap-5 text-center mt-5'>
        <div>
          <p className='text-3xl font-semibold'>{user.displayName}</p>
        </div>
        <div>
          <p className='text-4xl font-semibold'>{user.email}</p>
        </div>
        <div>
          <p className='text-4xl font-semibold text-green-700'>
            Your Role :{" "}
            {adminUser.role ? <span>Admin</span> : <span> Client</span>}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
