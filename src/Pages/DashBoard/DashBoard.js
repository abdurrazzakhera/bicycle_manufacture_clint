import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className='drawer drawer-mobile'>
      <input id='dashboard-sidebar' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col mr-5'>
        {/* <!-- Page content here --> */}
        <Outlet />
      </div>
      <div className='drawer-side'>
        <label htmlFor='dashboard-sidebar' className='drawer-overlay'></label>
        <ul className='menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content'>
          {admin ? (
            <>
              <li>
                <Link to='/dashboard'>Profile</Link>
              </li>
              <li>
                {" "}
                <Link to='/dashboard/allorders'>All Orders</Link>
              </li>
              <li>
                <Link to='/dashboard/users'>All Users</Link>
              </li>
              <li>
                <Link to='/dashboard/manageproduct'>Manage Product</Link>
              </li>
              <li>
                <Link to='/dashboard/addproduct'>Add Product</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to='/dashboard'>Profile</Link>
              </li>
              <li>
                <Link to='/dashboard/myorders'>My Orders</Link>
              </li>
              <li>
                <Link to='/dashboard/addreview'>Add Review</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
