import { Link } from "react-router-dom";

const Nav = () => {
 return (
  <nav>
   <div className="logo">
    <h1>Foodies</h1>
   </div>
   <div className="nav-links">
    <Link to="/">Home</Link>
    <Link to="/services">Services</Link>
    <Link to="/contact">Contact</Link>
    <Link className="cta" to="/login">
     Sign In/Up
    </Link>
    <button>☼</button>
   </div>
  </nav>
 );
};

export default Nav;
