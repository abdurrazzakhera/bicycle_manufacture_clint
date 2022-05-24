import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div class='drawer drawer-mobile'>
      <input id='dashboard-sidebar' type='checkbox' class='drawer-toggle' />
      <div class='drawer-content flex flex-col items-center justify-center'>
        {/* <!-- Page content here --> */}
        <Outlet />
        {/* <label
          for='dashboard-sidebar'
          class='btn btn-primary drawer-button lg:hidden'
        >
          Open drawer
        </label> */}
      </div>
      <div class='drawer-side'>
        <label for='dashboard-sidebar' class='drawer-overlay'></label>
        <ul class='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to='/dashboard'>My Profile</Link>
          </li>
          <li>
            <Link to='/dashboard'>Sidebar Item 2</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
