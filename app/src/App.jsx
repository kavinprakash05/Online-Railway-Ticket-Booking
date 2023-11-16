import {
  Routes,Route,
}from "react-router-dom";
import Home from "./pages/home/Home"; 
import List from "./pages/home/list/List";
import Booking from "./pages/home/booking/Booking";
import Signup from "./components/Signuppage/Signup";
import Login from "./components/Loginpage/Login";
import Calculator from "./components/Calculator/Calculator";

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bookings" element={<List/>}/>
        <Route path="/bookings/:id" element={<Booking/>}/>
        <Route path ="/S" element={<Signup/>}/>
        <Route path ="/l" element={<Login/>}/>
        <Route path ="/t" element={<Calculator/>}/>
      </Routes>
  )
}


export default App;
