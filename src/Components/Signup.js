import { Link } from "react-router-dom";
import "../Styles/Login.scss";
import LoginImg from "../Assert/Images/Login.png";

const SignUp = () => {
  return (
    <div className="signUp">
      <div className="img-container">
        <img src={LoginImg} alt="" />
      </div>
      <div className="form-container">
        <div className="login-form">
          <form action="#">
            <header>
              <h1>Sign Up</h1>
            </header>
            <div className="inputs">
              <div className="email input">
                <input type="text" required />
                <div className="placeholder">
                  <p>Email</p>
                </div>
              </div>
              <div className="Password input">
                <input type="Password" required />
                <div className="placeholder">
                  <p>Password</p>
                </div>
              </div>
            </div>
            <div className="buttons">
              <button className="submit">Let's Go</button>
            </div>
          </form>
        </div>
        <div className="signUp">
          <h2>Already a Foodie?</h2>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
