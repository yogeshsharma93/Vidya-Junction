import "./Navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navBar">
        <div className="left">
          <img
            class="logo"
            src="./images/logo 2.png"
            alt="logo"
            height="60px"
          />
          <div>
            <h3>Vidya Junction</h3>
            <h5>Government Of India</h5>
          </div>
        </div>
        <img
          align="right"
          class="emblem"
          src="./images/satyamev jayate 1.png"
          alt="emblem"
          height="60px"
        />
      </div>
      <div class="fixed menuItems">
      <Link to={"/"}>
          <p>Home</p>
        </Link>
        <Link to={"/slot"}>
          <p>Slot</p>
        </Link>
        <Link to={"/attendance"}>
          <p>Attendance</p>
        </Link>
        <Link to={"/activity"}>
          <p>Activity</p>
        </Link>
        <Link to={"/signin"}>
          <p>Login</p>
        </Link>
        <Link to={"/signup"}>
          <p>Sign Up</p>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
