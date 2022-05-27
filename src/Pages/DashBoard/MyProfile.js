import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <div>
        <div>
          <p>Full Name:</p>
          <p>Md. Abdur Razzak</p>
        </div>
        <div>
          <p>User Email:</p>
          <p>hhera1413@com</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
