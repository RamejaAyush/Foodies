import { Link, Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import SignUp from "./Signup";
import Login from "./Login";
import "../Styles/Nav.scss";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="logoContainer">
          <div className="logo">F</div>
          <h1>Foodies</h1>
        </div>
        <div className="nav-links">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/#services">
            Services
          </Link>
          <Link className="link" to="/#contact">
            Contact
          </Link>
          <Link className="cta" to="/login">
            Sign In/Up
          </Link>
          <button className="theme">☼</button>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Nav;
