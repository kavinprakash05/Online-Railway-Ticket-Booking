import "./Navbar.css"
import { Link } from "react-router-dom"
import Signup from "../Signuppage/Signup"
import Login from "../Loginpage/Login"
const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navContainer">
                 <span className="logo">Ticketbooking</span>
                  <div className="navItems">
                    <Link to={'\S'}>
                  <button className="navButton" >Register</button>
                  </Link>
                  <Link to={'\L'}>
                    <button className="navButton">Login</button>
                    </Link>
                  </div>
            </div>
        </div>
    )
}
export default Navbar