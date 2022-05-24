import "./App.css";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer";
import Blogs from "./Pages/Blogs/Blogs";
import About from "./Pages/About/About";
import SignUp from "./Pages/Login/SignUp";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Pages/Shared/PrivateRoute";
import Orders from "./Pages/Home/Orders";
import DashBoard from "./Pages/DashBoard/DashBoard";
import MyProfile from "./Pages/DashBoard/MyProfile";
import MyOrders from "./Pages/DashBoard/MyOrders";
import Users from "./Pages/DashBoard/Users";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/singup' element={<SignUp />} />
        <Route
          path='/orders/:productId'
          element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
        />
        <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <DashBoard />
            </PrivateRoute>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myorders' element={<MyOrders />}></Route>
          <Route path='users' element={<Users />}></Route>
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
      <script src='https://cdn.tailwindcss.com'></script>
    </div>
  );
}

export default App;
