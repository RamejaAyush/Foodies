import { Link } from "react-router-dom";
import "../Styles/Login.scss";
import { motion } from "framer-motion";
import SignUpImg from "../Assert/Images/signUp.jpg";

const SignUp = () => {
  const imgAnimation = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };
  const formAnimation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };
  return (
    <div className="signUp">
      <motion.div
        variants={imgAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
        className="img-container">
        <img src={SignUpImg} alt="" />
      </motion.div>
      <motion.div
        variants={formAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
        className="form-container">
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
      </motion.div>
    </div>
  );
};

export default SignUp;
