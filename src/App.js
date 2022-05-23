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
      </Routes>
      <Footer />
      <ToastContainer />
      <script src='https://cdn.tailwindcss.com'></script>
    </div>
  );
}

export default App;
