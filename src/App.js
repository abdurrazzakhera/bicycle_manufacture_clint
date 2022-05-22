import "./App.css";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <h1 className='text-5xl'>Hello This is From tailWind</h1>
      <button className='btn btn-primary'>Button daisy</button>
      <ToastContainer />
    </div>
  );
}

export default App;
